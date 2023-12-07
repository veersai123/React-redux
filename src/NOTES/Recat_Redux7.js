// main.jsx
import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
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
//app.jsx
import React from 'react'
import { connect } from 'react-redux'
function App(props) {
  return (
    <div>
    <h1>{props.Name}</h1>
    <h1 style={{backgroundColor:"red"}}>{props.Phone}</h1>
      <h1>Hello guys</h1>
       <button onClick={()=>props.a()}>CHANGENAME</button>
       <button onClick={()=>props.b()}>CHANGEPHONE</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    Name:state.name,
    Phone:state.phone
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    a:()=>{
        dispatch({type:'namechange',data:'veer sai' })
    },
    b:()=>{
      dispatch({type:'phonechange', data:9883298228})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)