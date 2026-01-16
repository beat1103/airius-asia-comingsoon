'use client'

import { useEffect } from 'react'

export const Preloader: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('loaded')
    document.getElementById('preloader_container')?.classList.add('loaded')
  }, [])

  return (
    <header className="preloader_header fixed top-0 z-[100] min-h-[480px] w-full h-full bg-gray-100">
      <div className="preloader_loader absolute left-0 w-full opacity-0 cursor-default pointer-events-none bottom-[20%]">
        <svg className="preloader_inner block mx-auto" width="60px" height="60px" viewBox="0 0 80 80">
          <path
            className="preloader_loader_circlebg"
            fill="none"
            strokeWidth="6"
            stroke="rgba(0, 0, 0, .1)"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
          <path
            id="preloader_loader_circle"
            className="preloader_loader_circle"
            fill="none"
            strokeWidth="6"
            stroke="rgba(0, 0, 0, .3)"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
        </svg>
      </div>
    </header>
  )
}
