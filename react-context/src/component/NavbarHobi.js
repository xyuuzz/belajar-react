import { useEffect, useCallback } from "react"
import { useAppContext } from "../react-context/appContext"


export default () =>
{
    const [state, dispatch] = useAppContext()
    useEffect(() => {
        console.log("halo")
    })
    
    useCallback(() => state, [state.bioData.hobi])
    
    return (
        <>
            <h3>Hobi saya adalah </h3>
            <p>{state?.bioData?.hobi?.length ? state.bioData.hobi : "Kosong"}</p>    
            
            <input type="text" placeholder="Change Hobby"
                onChange={e => {
                    dispatch({
                        type: "setBioData",
                        data: {
                            ...state.bioData,
                            hobi: e.target.value
                        }
                    })
                }}
            />
        </>
    )
}