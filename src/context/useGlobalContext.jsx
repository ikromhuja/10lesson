import { createContext,useReducer} from "react";

export const GlobalContext =createContext() 

const changeState =(state,action)=>{
 switch(action.type){
   case "CHANGE_COLOR":
      return{...state,navbarBgColor:action.payload}
    case "CHANGE_USER":
      return {...state,user:action.payload}
    default:
      return state
  }
}
export function GlobalContextProvider ({children}){
  const [state,dispatch] =useReducer(changeState,{
    user:null,
    navbarBgColor:"#ccc",
  })

  return(
    <GlobalContext.Provider value={{...state,dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}