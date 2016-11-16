import { TOGGLE_ADD } from '../actions'

export default function formDisplayed (state = false, action){
    switch (action.type) {
        case TOGGLE_ADD : 
            return !state;
        default :
            return state;
    }
}