import { useReducer } from "react"

// CARA PENGGUNAAN useReducer dalam React 


/* 
    ketika fungsi dispatch dipanggil, maka fungsi redurcer akan dijalankan
    
    menerima 2 parameter, parameter pertama menerima data state dan parameter kedua menerima data yang dikirim dari parameter fungsi dispatch

*/
function reducer(state, action)
{
    switch(action.type)
    {
        case "increment": 
            return {...state, count: state.count+parseInt(state.payload)}
        case "decrement":
            return {...state, count: state.count-state.payload}
        case "payload":
            return {...state, payload: action.payload}
        // default:
        //     throw new Error("Bacot")
    }
}

// inisialisasi state yang akan digunakan di useReducer
const initialState = {
    count: 0, 
    payload: 1
}

export default function Reducer()
{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <button onClick={dispatch.bind(this, {type: "decrement"})}>-</button>
            <span>{state.count}</span>
            <button onClick={dispatch.bind(this, {type: "increment"})}>+</button>
            
            <br />
            
            <input type="number" onChange={e => {
                dispatch({
                    type: "payload",
                    payload: e.target.value
                })
            }} placeholder="Payload Counter" />
        </>
    )
}