import { useContext } from "react";
import { AppContext } from "../react-context/appContext";


export default () => 
{
    const context = useContext(AppContext)
    
    return (
        <>
            <h3>Info Tipe: </h3>
            <p>{context?.info?.type ?? "Kosong"}</p>
        </>
    )
}