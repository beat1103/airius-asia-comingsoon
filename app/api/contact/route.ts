import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 'contact-name': name, 'contact-email': email, 'contact-message': message } = body

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      )
    }

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 이메일 내용
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `문의하기: ${name}님으로부터`,
      html: `
        <div style="font-family: Pretendard, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
            새로운 문의가 접수되었습니다
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>메시지:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px;">
            <p>이 이메일은 ${name}님(${email})이 웹사이트 문의 폼을 통해 보낸 메시지입니다.</p>
          </div>
        </div>
      `,
      text: `
        새로운 문의가 접수되었습니다
        
        이름: ${name}
        이메일: ${email}
        메시지:
        ${message}
      `,
    }

    // 이메일 전송
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: '문의가 성공적으로 전송되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { success: false, error: '이메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
