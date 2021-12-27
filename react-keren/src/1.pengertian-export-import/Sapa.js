
function Sapa()
{
    return (
        <>
            <h1 align='center'>Halo, Selamat Pagi! <br/> Semoga Harimu menyenangkan!</h1>
            <hr />
        </>
    )    
}

/**
    Ketika menggunakan JS, kita dapat menggunakan komponent (variabel, function, class) dari file lain, caranya adalah menggunakan fitur export dan import
    
    Import => memanggil blok kode dari file lain
    Export => export digunakan untuk memberikan nama blok kode yang dimaksud ke file yang memanggil nya (import)
    
    Terus kak, yang dimaksud export default itu apa?
    export default adalah kita yang hanya ingin meng-export satu blok kode saja. 
    cara meng-import nya juga lebih gampang :
    import namaBlokKode form './file'
    
    sendangkan jika kita ingin meng-export biasa, maka bisa menambahkan keyword export di depan baris tersebut, contohnya :
    export const abal = false;
    
    cara meng-import nya yaitu diapit dengan curly brackets.
*/
export default Sapa;