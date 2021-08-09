import React, { useReducer }  from 'react';
import {
    INCREMENT,
    DECREMENT,
    RESET,
    MULTIPLY_3,
    DIVIDE_2
} from "./types";

export const CountContext = React.createContext({});

const initialState = {
    count: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1,
            };
        
        case DECREMENT:
            return {
                count: state.count - 1,
            };
        
        case RESET:
            return {
                count: 0,
            };
        
        case MULTIPLY_3:
            return {
                count: state.count * 3,
            }
        
            case DIVIDE_2:
                return {
                    count: state.count / 2,
                }

        default:
            return state;
    }
};

function CountContextWrapper({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider value ={{ state, dispatch }}>
            { children }
        </CountContext.Provider>
    )
}

export default CountContextWrapper;