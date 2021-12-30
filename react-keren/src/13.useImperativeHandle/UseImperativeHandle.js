import { useImperativeHandle, forwardRef, useState } from "react";

/**
    Jadi apa itu sebenarnya hook useImperativeHandle?
    hmm, kok kayaknya beda banget sama hook yang udah kita pelajari kemarin kemarin
    
    Hook useImperativeHandle memungkinkan kita mengkomunikasikan parent element dengan child element dengan perantara hook useRef dan forwardRef.
    
    Jadi, kerangkanya itu gini,
    child component nantinya akan dibungkus dengan fungsi forward ref dan menerima 2 parameter yaitu props dan ref. 
    nah property ref ini nilainya didapatkan dari parent element.
    
    Sedangkan parent element hanya diwajibkan menggunakan hook useRef yang gunanya untuk menghubungkan component child dengan component nya.
    
    ayo kita bahas hook useImperativeHandle. 
    hook ini menerima 2 parameter yaitu ref sebagai penampung nilai ref dari parent component dan callback. Isi callback ini adalah objek, dan di dalam objek ini kita dapat mendefinisikan fungsi fungsi yang dapat diakses oleh parent component.

*/

const UseImperativeHandle = forwardRef((props, ref) => {
    const [tg, setTg] = useState(false)
    
    useImperativeHandle(ref, () => (
    {
        updateTg() {
            setTg(!tg);
        },
    }
    ));
    
    return (
        <>
            <button onClick={setTg.bind(this, !tg)}>Button Child</button>
            
            {
                tg && <p>Muncul</p>
            }
        </>
    )
})

export default UseImperativeHandle;