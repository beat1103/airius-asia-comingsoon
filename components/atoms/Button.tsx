import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'contact'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'btn waves-effect waves-light inline-block uppercase border-none text-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg font-bold'
  
  const variantStyles = {
    primary: 'h-10 px-6 rounded-sm leading-10 bg-primary hover:bg-primary-hover',
    secondary: 'h-10 px-6 rounded-sm leading-10 bg-gray-600 hover:bg-gray-700',
    contact: 'h-12 px-8 rounded-full leading-12 text-lg bg-primary hover:bg-primary-hover',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
