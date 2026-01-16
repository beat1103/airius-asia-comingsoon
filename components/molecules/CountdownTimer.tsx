'use client'

import React, { memo } from 'react'
import { useCountdown } from '@/hooks/useCountdown'

interface CountdownTimerProps {
  targetDate: Date
}

export const CountdownTimer: React.FC<CountdownTimerProps> = memo(({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div id="countdown" className="countdown relative z-20 will-change-contents flex flex-wrap justify-center items-center gap-2 sm:gap-4">
      <div className="countdown_part first inline-block px-2 sm:px-0 sm:pr-12 mb-7 text-center border-r border-white/70">
        <h1 className="days text-3xl sm:text-5xl md:text-6xl font-bold leading-none tabular-nums">{days}</h1>
        <p className="timeRefDays mb-0 text-xs sm:text-base">days</p>
      </div>
      <div className="countdown_part inline-block px-2 sm:px-12 mb-7 text-center border-r border-white/70">
        <h1 className="hours text-3xl sm:text-5xl md:text-6xl font-bold leading-none tabular-nums">{hours}</h1>
        <p className="timeRefHours mb-0 text-xs sm:text-base">hours</p>
      </div>
      <div className="countdown_part inline-block px-2 sm:px-12 mb-7 text-center border-r border-white/70">
        <h1 className="minutes text-3xl sm:text-5xl md:text-6xl font-bold leading-none tabular-nums">{minutes}</h1>
        <p className="timeRefMinutes mb-0 text-xs sm:text-base">minutes</p>
      </div>
      <div className="countdown_part last inline-block px-2 sm:px-12 sm:pr-0 mb-7 text-center">
        <h1 className="seconds text-3xl sm:text-5xl md:text-6xl font-bold leading-none tabular-nums">{seconds}</h1>
        <p className="timeRefSeconds mb-0 text-xs sm:text-base">seconds</p>
      </div>
    </div>
  )
})

CountdownTimer.displayName = 'CountdownTimer'
