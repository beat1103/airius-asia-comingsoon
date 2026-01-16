import React from 'react'
import { SocialIcon } from './SocialIcon'

const socialLinks = [
  { icon: '&#xe282;', href: '#', className: 'twitter_icon' },
  { icon: '&#xe281;', href: '#', className: 'facebook_icon' },
  { icon: '&#xe279;', href: '#', className: 'linkdin_icon' },
  { icon: '&#xe27f;', href: '#', className: 'dribbble_icon' },
]

export const SocialIcons: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="social_icons_container relative bottom-12 w-full z-10 text-center">
        <div className="social_icons">
          <ul className="inline-block list-none p-0 h-8">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} icon={link.icon} href={link.href} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
