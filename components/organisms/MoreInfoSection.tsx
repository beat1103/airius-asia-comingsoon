import React from 'react'
import { ContactForm } from './ContactForm'

export const MoreInfoSection: React.FC = () => {
  return (
    <section id="more_info" className="min-h-screen pt-20 pb-20 relative z-[1] bg-gray-100 flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
