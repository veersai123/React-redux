import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './redux/actionCreator/actionCreator'

function Hooks() {
   const x= useSelector((state)=>{
    return state.name
   })
   const y= useSelector((state)=>{
    return state.phone
   })
   const dispatch=useDispatch()
  return (
    <>
   <h1>I am from component Hooks {x}</h1>
   <h2>phone {y}</h2>
   <button onClick={()=>dispatch(changeName())}>chnagename</button>
    </>
  )
}
export default Hooks