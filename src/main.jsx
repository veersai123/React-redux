import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const initalState={
    name:"deepak",
    phone:8378783787
}
const rootReducer=(state=initalState,action)=>{
switch(action.type)
{
    case 'namechange':
        return {
            ...state,
            name:action.data
        }
    case 'phonechange':
        return {
            ...state,
            phone:9090999892
        }
    default:
        return state
}
}
let store=createStore(rootReducer)
ReactDOM.createRoot(document.getElementById('root')).render(

   <Provider store={store}>
     <App />
   </Provider>
)
