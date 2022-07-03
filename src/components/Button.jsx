import React from 'react'

const Button = ({color,bgColor,icon,borderRadius, size,text, customFunc}) => {
  return (
    <button type='button' style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`} onClick={customFunc}>
      {icon}
      {text}
    </button>
  )
}

export default Button