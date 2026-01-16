'use client'

import { Preloader } from '@/components/organisms/Preloader'
import { HeroSection } from '@/components/organisms/HeroSection'
import { MoreInfoSection } from '@/components/organisms/MoreInfoSection'

export default function Home() {
  return (
    <div id="preloader_container">
      <Preloader />
      <HeroSection />
      <MoreInfoSection />
    </div>
  )
}
