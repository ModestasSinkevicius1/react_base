import { ADD, ADD_ONE, MINUS, MINUS_ONE } from "../Constants/actions";

export function add(){
    return{
        type: ADD_ONE
    }
}

export function minus(){
    return{
        type: MINUS_ONE
    }
}

export function addSome(payload){
    return{
        type: ADD,
        payload: payload
    }
}

export function minuSome(payload){
    return{
        type: MINUS,
        payload: payload
    }
}