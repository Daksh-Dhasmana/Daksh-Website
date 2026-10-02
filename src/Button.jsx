import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button", 
  ...props 
}) => {
  // Base space-themed button styles
  const baseStyles = "px-6 py-2.5 text-sm font-semibold tracking-wide text-cyan-300 bg-black/60 backdrop-blur-lg border border-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button