import React from 'react'

function Button(
    children,
    bgColor = 'bg-blue-500',
    textColor = 'white',
    className = '',
    ...props
) {
  return (
    <button className={` w-5 p-3 ${bgColor} ${textColor} ${className}  `} {...props }>
        {children}
    </button>
  )
}

export default Button