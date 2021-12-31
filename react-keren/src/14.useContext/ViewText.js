import { useContext } from "react";
import { AppContext } from "./UseContext";

export default function ViewText()
{
    const {username} = useContext(AppContext);
    
    return (
        <h1>Text: {username}</h1>
    )
}