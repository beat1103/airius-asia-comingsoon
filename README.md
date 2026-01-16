# JAMES Coming Soon - Next.js

Next.js로 마이그레이션된 Coming Soon 페이지입니다.

## 시작하기

### 설치

```bash
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

- `app/` - Next.js App Router 페이지 및 레이아웃
- `public/` - 정적 파일 (이미지, 비디오 등)
- `css/` - 커스텀 CSS 파일
- `js/` - 기존 JavaScript 파일 (참고용)

## 주요 기능

- 실시간 카운트다운 타이머
- 문의하기 버튼 스크롤 기능
- 문의 폼 이메일 전송 (Nodemailer)
- 반응형 디자인
- Tailwind CSS 스타일링
- Pretendard 폰트 적용

## 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Contact Email (받을 이메일 주소)
CONTACT_EMAIL=your-email@gmail.com
```

### Gmail 사용 시

Gmail을 사용하는 경우 앱 비밀번호를 생성해야 합니다:
1. Google 계정 설정 > 보안
2. 2단계 인증 활성화
3. 앱 비밀번호 생성
4. 생성된 비밀번호를 `SMTP_PASS`에 입력

### 다른 이메일 서비스 사용 시

- **Outlook/Hotmail**: `SMTP_HOST=smtp-mail.outlook.com`, `SMTP_PORT=587`
- **Yahoo**: `SMTP_HOST=smtp.mail.yahoo.com`, `SMTP_PORT=587`
- **기타 SMTP 서버**: 해당 서비스의 SMTP 설정에 맞게 변경
# airius-asia-comingsoon
