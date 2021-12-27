/**
    Kita dapat menerima parameter / nilai ketika component kita dipanggil. 
    Nilai yang diterima dimasukan ke dalam obj sebagai parameter pertama dan biasanya diberi nama props.
    
    Cara mengirim parameter / nilai ke dalam component cukup ez, yaitu hanya dengan menulis nama props tersebut dalam bentuk property spt di HTML.
    <KirimProps namaProps=value namaProps2=value/>
    
    ---
    
    Ada sebuah props spesial di dalam React yaitu children. Component ini dapat di passing dari property yang namanya children atau kita dapat passing nilainya dengan cara menuliskannya sebagai content component tersebut.
*/
function SalamOrang(props)
{
    return (
        <div align="center">
            <h2>Salam Dari {props.asal}</h2>
            <h4>Saya {props.nama}, Salam Kenal!</h4>
            <p>{props.children}</p>
            <hr />
        </div>
    )
}

export default SalamOrang