// ===================================== App.js ======================================
import React, { useContext } from 'react'
import { x } from './main.js'
export default function App() {
  const m=useContext(x);
  return (
    <div>
     <h1 style={{backgroundColor:"red"}}>{m.getState()}</h1>
      <h1>Hello World</h1>
    </div>
  )
}


// ========================================== main.js ===========================================
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { createStore } from 'redux'

 const rootReducer=(state="",action)=>{
  switch(action.type)
  {
    case "courses":
      return action.payload
    default:
      return state
  }
 }
let store=createStore(rootReducer)
console.log(store)
store.dispatch({type:"courses", payload:"Hello React-Redux"})

 export const x=createContext();
ReactDOM.createRoot(document.getElementById('root')).render(
 <x.Provider value={store}>
    <App />
 </x.Provider>
)
