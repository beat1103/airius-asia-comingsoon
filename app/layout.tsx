import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Airius 팬 - 에너지 효율 향상 및 쾌적한 실내 환경 솔루션 | 빅팬테크',
  description: 'Airius 팬은 건물의 에너지 효율을 높이고 쾌적한 실내 환경을 조성하는 혁신적인 공기 순환 및 온도 분산 팬 시스템입니다. 냉난방 에너지 소비를 25~40%까지 절감하며, 온도 균일화와 결로 방지 효과를 제공합니다. 사무실, 창고, 소매점 등 다양한 공간에 적용 가능합니다.',
  keywords: [
    'Airius 팬',
    '에어리어스 팬',
    '공기 순환 팬',
    '온도 분산 팬',
    'Destratification 팬',
    '에너지 절감 팬',
    '냉난방 효율',
    '결로 방지',
    '공기 정화',
    'HVAC 시스템',
    '빅팬테크',
    'BigFanTech',
    '건물 에너지 효율',
    '실내 환경 개선',
    '공기 분배 기술',
  ],
  authors: [{ name: 'BigFanTech', url: 'https://bigfantech.com' }],
  creator: 'BigFanTech',
  publisher: 'BigFanTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bigfantech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Airius 팬 - 에너지 효율 향상 및 쾌적한 실내 환경 솔루션',
    description: '건물의 에너지 효율을 높이고 쾌적한 실내 환경을 조성하는 혁신적인 공기 순환 및 온도 분산 팬 시스템. 냉난방 에너지 소비를 25~40%까지 절감합니다.',
    url: 'https://bigfantech.com',
    siteName: 'BigFanTech',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airius 팬 - 에너지 효율 향상 및 쾌적한 실내 환경 솔루션',
    description: '건물의 에너지 효율을 높이고 쾌적한 실내 환경을 조성하는 혁신적인 공기 순환 및 온도 분산 팬 시스템.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,900,700,500,300,100" rel="stylesheet" />
      </head>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
