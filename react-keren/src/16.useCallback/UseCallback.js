import { useState, useCallback } from "react";
import Child from './Child';

/**
    Misalnya ni, kita itu mendefinisikan sebuah fungsi di dalam component React.
    Terus kita panggil kan fungsi itu di element JSX.
    
    Nah fungsi itu pasti dieksekusi kan pas component nya dirender?
    Coba tebak, ketika kita punya state dan ada perubahan di state yang sebenarnya tidak mempengaruhi fungsi yang kita panggil di JSX, apakah fungsi tersebut di render ulang?
    
    Yap, fungsi yang kita definisikan tadi akan selalu di render ulang oleh React ketika ada dependensi di dalam component yang berubah, walaupun dependensi yang berubah tidak ada hubunganya dengan fungsi.
    
    Lah? Jadi kita boros memory dong kak? 
    Nah itu, jika kita tidak mencegahnya maka website kita akan berat jika ada banyak dependensi yang berubah sekaligus.
    
    React notice dengan masalah ini, sehingga dibuatkanlah hook yang bernama useCallback. Hook useCallback ini mengembalikan nilai memoized sama seperti useMemo. 
    
    La terus, yang membedakan useCallback dengan useMemo itu apa kak?
    Nah, jika useMemo itu dapat menyimpan suatu nilai, intinya useMemo digunakan untuk menyimpan nilai. 
    Sedangkan useCallback tidak dapat menyimpan nilai, lebih khusus digunakan untuk menyimpan fungsi, maka disebutlah hook useCallback.
    
    Hook useCallback ini biasanya digunakan saat component memiliki child component yang terhubung dengan state parent component.
*/

export default function UseCallback()
{
    const [toogle, setToogle] = useState(false)
    const [data, setData] = useState("Belajar Hook useCallback")
    
    /* 
        ketika state yang tidak dibutuhkan berubah seperti state toogle, dan fungsi dibawah ini kita akses di child component, maka secara default, React akan memanggil fungsi ini kembali karena component yang dirender ulang.
    */
    // const getData = () => data;
    
    /**
        Namun jika kita membungkus fungsi di atas menggunakan hook useCallback dan memberikan argument ke dua dengan array yang elementnya adalah state(dependensi) yang dibutuhkan, maka jika ada state yang tidak dibutuhkan oleh fungsi (tidak ditulis di dalam array) yang terjadi adalah fungsinya tidak akan dipanggil.
        
        Fungsi akan dipanggil jika state yang termasuk di dalam array diubah nilainya.
    */
    const getData = useCallback(() => data, [data])
    
    return (
        <>
            <Child letter={getData} />
            <button onClick={setToogle.bind(this, ! toogle)}>Klik Tombol Ini</button>
            
            {
                toogle && <h1>Tampil</h1>
            }
        </>
    )
}