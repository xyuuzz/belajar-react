import { useLayoutEffect, useEffect, useRef } from "react";

/**
    Kenapa ada useLayoutEffect dan useEffect?
    Apa perbedaan dari kedua hook diatas?
    Mari kita usut tuntas kawan kawan!
    
    Sesuai dengan materi yang sudah kita pelajari kemarin, callback function pada useEffect akan dieksekusi setelah component ter-render atau setelah dependensi yang dimiliki component berubah nilainya. 
    
    La terus useLayoutEffect apa kak?
    Kebalikanya dek, callback function useLayoutEffect akan dieksekusi sebelum React mengeksekui perubahan nilai pada dependensi yang dimiki oleh Component.
    
    Jadi bisa kita ibaratkan seperti ini:
    
    useLayoutEffect => nilai dari dependensi component berubah => useEffect
*/

export default function UseLayoutEffect()
{
    const inputEl = useRef(null);
    
    /**
        Seperti contoh dibawah, 
        console log yang dikeluarkan oleh callback useLayoutEffect nilainya bukan Maulana loh! akan tetapi nilai default dari input tersebut yaitu Yusuf!
        
        Ini membuktikan bahwa callback useLayoutEffect dieksekusi terlebih dahulu sebelum callback useEffect
    */
    
    useEffect(() => {
        inputEl.current.value = "Maulana";
    }, [])
    
    useLayoutEffect(() => {
         console.log(inputEl.current.value);
    }, [])
    
    return (
        <>
            <h1>Pembahasan React Hook useLayoutEFfect</h1>
            <input ref={inputEl} type="text" value="yusuf"/>
        </>
    )
}