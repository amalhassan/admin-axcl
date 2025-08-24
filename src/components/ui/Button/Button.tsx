import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  textContent: string;
  borderRadius?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = 'bg-bright-orange', 
  textColor = 'text-white',   
  textContent,
  borderRadius = 'rounded-md', 
  className,
  ...props
}) => {
const buttonClasses = clsx(
    'font-bold',
    'py-2',
    'px-4',
    'transition-colors',
    'duration-300',
    'font-family-sans',
    'w-40',
    'h-9',
    bgColor,
    textColor,
    borderRadius,
    className
);
  return (
    <button className={buttonClasses} {...props}>
      {textContent}
    </button>
  )
}

export default Button
