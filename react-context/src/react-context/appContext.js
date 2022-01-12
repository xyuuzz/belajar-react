import { 
    createContext, 
    useContext, 
    useEffect, 
    useReducer, 
    useState 
} from "react";

/* 
    setelah kita tahu cara ini yaitu di component ini kita hanya mendefinisikan context saja, 
    
    kita akan menggunakan cara yang lebih sakti lagi, yaitu mendefinisikan component yang akan mengembalikan child + value provider dari context yang kita buat disini. Sehingga kita hanya cukup memanggil AppProvider lalu diisi dengan component yang mau di inject oleh context
    
    Penggunaan react context diperuntukan untuk dependency injection bukan untuk STATE MANAGEMENT. Karena react context tidak memiliki algoritma apapun untuk mengerjakan bidang state management. 
*/

const AppContext = createContext({
    empty: null
})

// ketika kita ingin menggunakan context yang ada di component ini, maka kita cukup import fungsi ini saja
export function useAppContext() {
    return useContext(AppContext)
}

const initialState = {
    info: {},
    bioData: {}
}

function reducer(state, action)
{
    switch(action.type)
    {
        case "setInfo":
            return {
                ...state,
                info: action.data
            }
        case "setBioData":
            return {
                ...state, 
                bioData: action.data
            }
    }
}

export function AppProvider({ children })
{
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [info, setInfo] = useState({})
    // const [bioData, setBioData] = useState({})
      
    useEffect(() => {
        const info = {
            location: "Jalan Tambak Boyo Lor",
            type: "Kost Putri Pak Kaji"
        }
        
        const bioData = {
          nama: "Maulana Yusuf Muhibbin",
          alamat: "Jalan Tangerang Jaya",
          hobi: "Ngoding"
        }
        
        dispatch({type: "setInfo", data: info});
        dispatch({type: "setBioData", data: bioData});
    }, [])
    
    const appContextValue = [state, dispatch]
    
    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}