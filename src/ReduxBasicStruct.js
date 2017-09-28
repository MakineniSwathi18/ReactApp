import { createStore } from "redux";
import React, { Component } from 'react';

class ReduxBasicStruct extends Component {
  render() {
    return (
  reducer = function(state,action){
 return state+1;
}

store = createStore(reducer,0);

store.subscribe(()=>{
	console.log("Store State value changed to", store.getState())
});

store.dispatch({type="INC", payload=1});
)
}
}
export default ReduxBasicStruct;