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