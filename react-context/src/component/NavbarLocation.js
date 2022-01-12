import { useContext } from "react";
import { AppContext } from "../react-context/appContext";


export default () => 
{
    const context = useContext(AppContext);
    
    return (
        <>
            <h3>Info Lokasi: </h3>
            <p>{context?.info?.location}</p>
        </>
    )
}