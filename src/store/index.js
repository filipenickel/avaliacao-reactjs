import { createStore } from 'redux';
const INITIAL_STATE = {
    usuarios: [],
}

//reducer
function users(state= INITIAL_STATE,action){
    console.log(action)
    switch(action.type){
        case 'ADD_USER':
        return {...state, usuarios:[...state.usuarios, action.userName], userPass: action.userPass}
        default:
        return state;
    }
}

export const Store = createStore(users);