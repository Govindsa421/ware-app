import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'number' | 'password' | 'file' | 'date' | 'textarea'

  placeholder?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  autoComplete?: string
  className?: string
  defaultValue?: string
}

export function Input({ type, placeholder, register, error, className, defaultValue, ...rest }: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
        defaultValue={defaultValue}
        className={`inputField ${className}`}
      />
      {error && <p className='text-red-600'>{error.message}</p>}
    </div>
  )
}
