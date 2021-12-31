import { useEffect, useState, useMemo } from "react";

/**
    Misal, kita mendefinisikan dua state yaitu a dan b dan sebuah fungsi yang mengembalikan nilai state a.
    
    Fungsi yang kita definisikan dipanggil di element JSX, sehingga akan dipanggil ketika component di render.
    
    Kita balik lagi ke pelajaran state, perilaku default dari state kan setiap nilai state berubah, maka component akan dirender ulang.
    
    Lantas, pertanyaannya adalah apakah fungsi akan dipanggil kembali jika state b kita ubah nilainya, secara tulisan, fungsi yang kita definisikan tidak membutuhkan state 
    
    Jawabannya adalah fungsi akan tetap dipanggil kembali karena component telah dirender ulang karena perubahan nilai pada state b.
    
    Nah, disini sudah mudeng kan? itu hanya 2 state, bagaimana jika kita punya banyak state dan fungsi, itu pasti akan memberatkan website sehingga membuat kecepatan website menurun dan menjadi lambat.
    
    Lalu bagaimana kita mengatasinya?
    React menyediakan hook yang bisa mengatasi masalah diatas, yaitu hook useMemo.
    
    useMemo memiliki 2 parameter, parameter 1 adalah sebuah callback yang mengembalikan fungsi yang akan dipanggil (harus mengembalikan nilai, nilai ini nantinya akan di-cache / memoized) dan parameter ke 2 adalah dependensi yang nanti akan men-trigger fungsi jika dependensi berubah nilainya.
*/

export default function UseMemo()
{
    const [render, setRender] = useState(false);
    const [data, setData] = useState(null);
    
    useEffect(async () => {
        const request = await fetch("http://jsonplaceholder.typicode.com/comments")
        
        const response = await request.json();
        setData(response)
    }, [])
    
    const findOneData = dataJson => {
        if(!dataJson) return null;
        const random = Math.floor(Math.random() * 100) + 1;
        console.log("computed")
        return dataJson[random].body
    }
    
    // ketika nilai dari state data berubah, maka panggil fungsi findOneData
    const getOneData = useMemo(() => findOneData(data), [data]);
    
    return (
        <>
            <h1>Membahas Cara Kerja Hook useMemo </h1>
            {
                data && <p>{getOneData}</p>
            }
            <button onClick={setRender.bind(this, !render)}>Render Ulang</button>
        </>
    )
}