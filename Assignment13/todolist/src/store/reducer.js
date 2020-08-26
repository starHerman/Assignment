
const initState={
    inputValue:"",
    list:["hello world","hello java"]
}


 const listReducer=(state=initState,action)=>{
   const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      
      case "INPUT_CHANGE":
        // console.log("12");
        return { ...state, inputValue: action.value };
        case "ADD_ITEM":
            
            newState.list.push(action.value)
            return  newState
        case "DEL_ITEM":
            // const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value,1);
            return newState
      default:
        //   console.log("111")
        return state;
    }
}
export default listReducer