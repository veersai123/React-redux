import { A,B} from "../constant"
export const initalState={
    name:"deepak",
    phone:8378783787
}
export const rootReducer=(state=initalState,action)=>{
    switch(action.type)
    {
        case A:
            return {
                ...state,
                name:action.data
            }
        case B:
            return {
                ...state,
                phone:9090999892
            }
        default:
            return state
    }
}
