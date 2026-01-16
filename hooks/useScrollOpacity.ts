import { useState, useEffect, useRef } from 'react'

export const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(0.6)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // 이전 requestAnimationFrame 취소
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }

      // requestAnimationFrame으로 스크롤 이벤트 최적화
      rafId.current = requestAnimationFrame(() => {
        const h = window.innerHeight
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        
        // 스크롤이 내려갈수록 opacity 증가 (어두워짐)
        // 0에서 시작해서 h만큼 스크롤하면 1.0이 됨
        const newOpacity = Math.min(0.6 + (scrollTop / h) * 0.4, 1.0)
        setOpacity(newOpacity)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기값 설정

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return opacity
}
