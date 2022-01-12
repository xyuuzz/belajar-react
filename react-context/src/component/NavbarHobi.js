import { useContext } from "react"
import { AppContext } from "../react-context/appContext"


export default () =>
{
    const context = useContext(AppContext)
    
    return (
        <>
            <h3>Hobi saya adalah </h3>
            <p>{context?.bioData?.hobi}</p>
        </>
    )
}