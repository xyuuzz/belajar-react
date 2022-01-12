import { useContext } from "react"
import { AppContext } from "../react-context/appContext"


export default () => 
{
    const context = useContext(AppContext)
    
    return (
        <>
            <h3>Nama saya: </h3>
            <p>{context?.bioData?.nama}</p>
        </>
    )
}