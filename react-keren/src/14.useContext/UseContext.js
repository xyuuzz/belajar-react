import Input from './Input';
import ViewText from './ViewText';
import { useState, createContext } from 'react';

export const AppContext = createContext(null);

export default function UseContext()
{
    const [username, setUsername] = useState('');

    /* 
        cara dibawah tidak direkomendasikan oleh React, 
        React sudah menyediakan hook untuk mengelola banyak state yang nanti bisa  diakses di component lain, hook tersebut adalah useContext
    */
    // return (
    //     <>
    //         <Input setUsername={setInput} />
    //         <ViewText username={input} />
    //     </>
    // )
    
    // menerapkan hook useContext
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Input /> <ViewText />
        </AppContext.Provider>
    );
}