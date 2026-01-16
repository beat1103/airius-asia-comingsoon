import { useState, useEffect } from 'react'

interface CountdownState {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export const useCountdown = (targetDate: Date): CountdownState => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const distance = target - now

      // 디버깅용 로그 (개발 환경에서만)
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && Math.random() < 0.01) {
        // 1% 확률로만 로그 출력 (너무 많이 출력되지 않도록)
        console.log('Countdown Debug:', {
          now: new Date(now).toISOString(),
          target: new Date(target).toISOString(),
          distance,
          days: Math.floor(distance / (1000 * 60 * 60 * 24))
        })
      }

      if (distance < 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}
