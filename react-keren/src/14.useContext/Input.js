import { useContext } from "react";
import { AppContext } from "./UseContext";

export default function Input()
{
    const {setUsername} = useContext(AppContext);
    
    return (
        <input type="text" onChange={event => setUsername(event.target.value)}/>
    )
}