import React from 'react'

const features = [
  { icon: '&#xe1ab;', text: 'Timer, contact & newsletter form' },
  { icon: '&#xe1d7;', text: 'Image, slider, video backgrounds' },
  { icon: '&#xe027;', text: 'Mobile App mockups' },
  { icon: '&#xe0b8;', text: 'Over 1500 icons included' },
]

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full sm:w-5/12">
      <h3 className="text-2xl font-bold mb-4">About Us</h3>
      <p className="mb-4">
        James is a responsive &quot;under construction&quot; page. It will fit perfectly as a placeholder for your website or landing page.
      </p>
      <p className="mb-4">
        It comes with several content and background variants. James is also equiped with some cool devices mockups for app version.
      </p>

    </div>
  )
}
