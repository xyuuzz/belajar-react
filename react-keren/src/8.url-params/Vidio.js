import {
    useParams,
    Link
} from "react-router-dom";

export default function Vidio()
{
    const params = useParams();

    return (
        <>
            <h1>Ini adalah view Vidio Website Kita</h1>
            <p>Dengan slug sebagai berikut : kita/vidio/{params.slug}</p>

            <Link to='/kita'>Kembali</Link>
        </>
    )
}