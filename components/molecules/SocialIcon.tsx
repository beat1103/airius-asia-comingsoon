import React from 'react'

interface SocialIconProps {
  icon: string
  href?: string
  onClick?: () => void
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = '#', onClick }) => {
  return (
    <li className="inline-block list-none p-0 h-8 float-left mr-3 ml-3 first:ml-0 last:mr-0">
      <div
        data-icon={icon}
        className="social_icon text-base leading-4 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
        onClick={() => {
          if (onClick) {
            onClick()
          } else {
            window.location.href = href
          }
        }}
      ></div>
    </li>
  )
}
