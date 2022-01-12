import { useAppContext } from "../react-context/appContext";


export default () => 
{
    const [state, dispatch] = useAppContext()
    
    return (
        <>
            <h3>Info Lokasi: </h3>
            <p>{state?.info?.location?.length ? state.info.location : "Kosong"}</p>
            
            <input type="text" placeholder="Change location"
                onChange={e => {
                    dispatch({
                        type: "setInfo",
                        data: {
                            ...state.info,
                            location: e.target.value
                        }
                    })
                }}
            />
        </>
    )
}