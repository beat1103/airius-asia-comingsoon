import React from 'react'
import { Textarea as ShadcnTextarea } from '../ui/textarea'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export const Textarea: React.FC<TextareaProps> = ({ label, className = '', id, ...props }) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="mb-6">
      <ShadcnTextarea
        id={textareaId}
        placeholder={label}
        className={cn(className)}
        {...props}
      />
    </div>
  )
}
