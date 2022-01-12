import { useAppContext } from "../react-context/appContext";


export default () => 
{
    const [state, dispatch] = useAppContext()
    
    return (
        <>
            <h3>Info Tipe: </h3>
            <p>{state?.info?.type?.length ? state?.info?.type : "Kosong"}</p>
            <input type="text"
                onChange={e => {
                    dispatch({
                        type: "setInfo", 
                        data: {
                            ...state.info,
                            type: e.target.value
                        }
                    })
                }} 
                placeholder="Change Type"
            />
        </>
    )
}