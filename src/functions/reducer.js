

// action: its a object which tells what to happen , type is a mandatory property ,payload optional

export const INCREMENT="INCREMENT"


export const initialState={
    count:20
}


export const reducerFunction =(state,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        default :
        return state

    }
}

