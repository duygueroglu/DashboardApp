import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({ bgColor,bgHoverColor, borderRadius, color, icon, size, text, width }) => {
 const {setIsClicked, initialState} = useStateContext()

 return (
    <button type="button" onClick={()=> setIsClicked(initialState)} style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>{icon} {text}</button>
  )
}

export default Button
