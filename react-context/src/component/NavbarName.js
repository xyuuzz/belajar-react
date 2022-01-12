import { useAppContext } from "../react-context/appContext"


export default () => 
{
    const [state, dispatch] = useAppContext()
    
    return (
        <>
            <h3>Nama saya: </h3>
            <p>{state?.bioData?.nama?.length ? state.bioData.nama : "Kosong"}</p>
            
            <input type="text" placeholder="Change name" 
                onChange={e => {
                    dispatch({
                        type: "setBioData", 
                        data: {
                            ...state.bioData,
                            nama: e.target.value
                        }
                    })
                }}
            />
        </>
    )
}