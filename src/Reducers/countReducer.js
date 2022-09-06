
import {ADD_ONE, MINUS_ONE, ADD, MINUS} from '../Constants/actions'

function countReducer(state, action){

    let stateCopy = state;

    switch(action.type){
        case ADD_ONE:
            stateCopy++;
            break;
        case MINUS_ONE:
            stateCopy--;
            break;
        case ADD:
            stateCopy += parseInt(action.payload);
            break;
        case MINUS:
            stateCopy += parseInt(action.payload);
            break;
        default:
    }

    return stateCopy;
}

export default countReducer;