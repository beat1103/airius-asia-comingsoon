'use client'

import React, { useState } from 'react'
import { Input } from '../atoms/Input'
import { Textarea } from '../atoms/Textarea'
import { Button } from '../atoms/Button'

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    'contact-name': '',
    'contact-email': '',
    'contact-message': '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      'contact-name': formData.get('contact-name'),
      'contact-email': formData.get('contact-email'),
      'contact-message': formData.get('contact-message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setMessage({ type: 'success', text: result.message || '문의가 성공적으로 전송되었습니다.' })
        ;(e.target as HTMLFormElement).reset()
        setFormData({ 'contact-name': '', 'contact-email': '', 'contact-message': '' })
      } else {
        setMessage({ type: 'error', text: result.error || '전송 중 오류가 발생했습니다.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full text-center">
      <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
      <p className="mb-4 text-center font-bold text-lg"
      style={{
        lineHeight: '1.2',
        whiteSpace: 'nowrap',
      }}
      >
      AIRIUS 팬의 장점과 시설을 어떻게 변화시킬 수 있는지 알아보세요!<br className='hidden sm:block' />
      전문가의 조언과 맞춤형 솔루션을 원하시면 지금 바로 문의해주세요.
      </p>
      
      {/* Contact Information */}
      <div className="my-8 flex flex-col sm:flex-row gap-4 justify-center items-center ">
        <a 
          href="tel:010-5440-7351" 
          className="group flex items-center gap-3 px-6 py-4 bg-white rounded-full border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)] max-w-[280px] sm:max-w-none"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">전화 문의</p>
            <p className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">010-5440-7351</p>
          </div>
        </a>
        
        <a 
          href="mailto:master@bigfantech.com" 
          className="group flex items-center gap-3 px-6 py-4 bg-white rounded-full border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)] max-w-[280px] sm:max-w-none"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">이메일 문의</p>
            <p className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 break-all">master@bigfantech.com</p>
          </div>
        </a>
      </div>

      <form action="/api/contact" id="contact-form" method="post" onSubmit={handleSubmit} className="w-full sm:w-[calc(100%-2rem)] max-w-[680px] mx-auto">
        <div className="contact_form">
          <Input 
            id="first_name" 
            name="contact-name" 
            type="text" 
            label="이름"
            value={formData['contact-name']}
            onChange={(e) => setFormData({ ...formData, 'contact-name': e.target.value })}
          />
          <Input 
            id="contact_email" 
            name="contact-email" 
            type="email" 
            label="이메일"
            value={formData['contact-email']}
            onChange={(e) => setFormData({ ...formData, 'contact-email': e.target.value })}
          />
          <Textarea 
            name="contact-message" 
            label="문의 내용"
            value={formData['contact-message']}
            onChange={(e) => setFormData({ ...formData, 'contact-message': e.target.value })}
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            name="action"
            variant="contact"
            disabled={isSubmitting}
            className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
          >
            {isSubmitting ? '전송 중...' : 'Send'}
          </Button>
        </div>
      </form>

      

      {/* Message Display */}
      {message && (
        <div
          className={`mt-4 p-4 rounded-md ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
      )}

      <div id="message" className="hidden fixed z-[3000] w-[40rem] top-1/2 left-1/2 -mt-[8.5rem] -ml-[20rem] text-center">
        <div id="alert" className="table-cell align-middle pb-8 pt-8 pl-8 pr-8"></div>
      </div>

     
    </div>
  )
}
