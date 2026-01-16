import { useEffect } from 'react'

export const useHomepageHeight = () => {
  useEffect(() => {
    const setHomepageHeight = () => {
      const h = window.innerHeight
      const heroSection = document.querySelector('.hero_fullscreen')
      const mockups = document.querySelectorAll('.mockup')
      
      if (heroSection) {
        ;(heroSection as HTMLElement).style.height = `${h}px`
      }
      
      mockups.forEach((mockup) => {
        ;(mockup as HTMLElement).style.height = `${h}px`
      })
    }

    setHomepageHeight()
    window.addEventListener('resize', setHomepageHeight)

    return () => {
      window.removeEventListener('resize', setHomepageHeight)
    }
  }, [])
}
