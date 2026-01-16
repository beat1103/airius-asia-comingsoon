import React from 'react'
import { Input as ShadcnInput } from '../ui/input'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-6">
      <ShadcnInput
        id={id}
        placeholder={label}
        className={cn(className)}
        {...props}
      />
    </div>
  )
}
