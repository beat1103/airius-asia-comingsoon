'use client'

import Image from 'next/image'
import { Logo } from '../atoms/Logo'
import { CountdownTimer } from '../molecules/CountdownTimer'
import { Button } from '../atoms/Button'
import { SocialIcons } from '../molecules/SocialIcons'
import { useScroll } from '@/hooks/useScroll'
import { useHomepageHeight } from '@/hooks/useHomepageHeight'
import { useScrollOpacity } from '@/hooks/useScrollOpacity'

export const HeroSection: React.FC = () => {
  const { scrollTo } = useScroll()
  useHomepageHeight()
  const overlayOpacity = useScrollOpacity()

  // Set target date to 15 days from now
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 15)

  return (
    <section 
      className="hero_fullscreen timer background_single text-white pt-14 relative min-h-screen"
      style={{
        backgroundImage: 'url(/img/bg01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay - 스크롤에 따라 opacity 변경 */}
      <div 
        className="absolute inset-0 bg-black/30 z-0 will-change-opacity"
        style={{ 
          opacity: overlayOpacity,
          transition: 'opacity 0.1s ease-out'
        }}
      ></div>

      {/* Logo and navigation */}
      <div className="container mx-auto px-4 top_bar relative z-10">
        <div className="row">
          <div className="w-full flex items-center justify-between">
            <Logo />
            <button
              onClick={(e) => {
                e.preventDefault()
                const moreInfoSection = document.getElementById('more_info')
                if (moreInfoSection) {
                  moreInfoSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-primary transition-colors duration-300 group"
              aria-label="문의하기"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                />
              </svg>
              <span className="hidden sm:inline font-medium">문의하기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className="container mx-auto px-4 text-center relative z-10 overflow-hidden h-full -mt-[5.285rem]"
        id="main_content"
        style={{ display: 'table' }}
      >
        <div className="content_container row align-middle z-10" style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          {/* Headline */}
          <h2 className="headline text-4xl md:text-5xl lg:text-6xl font-bold mb-8 relative z-[2] uppercase"
            style={{
              lineHeight: '1.2',
              whiteSpace: 'nowrap',
            }}
          >
            홈사이트 리뉴얼 중입니다.
            <br className='hidden sm:block' />
            곧 찾아 뵙겠습니다.          </h2>

          {/* Timer */}
          <CountdownTimer targetDate={targetDate} />

          <h6 className="text-lg md:text-xl mb-12 relative z-[2] max-w-3xl mx-auto">
            특허받은 공기 흐름 기술이 적용된 층류 제거 팬은 탁월한 냉방 및 난방 효과를 제공할 뿐만 아니라 에너지 비용, 냉난방 비용을 크게 절감하고, 필요에 따라 공기 정화 기능도 추가할 수 있습니다.
          </h6>

          {/* Contact Button */}
          <div className="relative z-10 mt-8">
            <Button
              id="contact_btn"
              variant="contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('more_info')
              }}
            >
              문의하기
            </Button>
          </div>
        </div>
      </div>

      {/* Mockups */}
      <div className="mockup mockup-right mockup-animation1 absolute top-0 z-0 w-full hidden text-right bg-black/20">
        <Image src="/images/mockups/1/back.png" alt="mockup" width={496} height={800} className="w-[31rem]" />
      </div>
      <div className="mockup mockup-right mockup-animation2 absolute top-0 z-0 w-full hidden text-right">
        <Image src="/images/mockups/1/front.png" alt="mockup" width={496} height={800} className="w-[31rem]" />
      </div>

    </section>
  )
}
