const {createStore}=require('redux')

//actions
const decrement=()=>{
    return {
        type:'DECREMENT'
    }


}
const increment=()=>{
    return {
        type:'INCREMENT'
    }


}

//reducer
const initialstates={
age:89
}
const counter=(state=initialstates,action)=>
{
const states={...state}
switch(action.type)
{
case 'INCREMENT':
console.log('INCREMENT')
return 2
break;
case 'DECREMENT':
console.log('deCREMENT')
return 1
break;
default:
return states
}

}

//store
const store=createStore(counter, 
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.dispatch(decrement())

store.subscribe(()=>{
  
})
console.log(store.getState())