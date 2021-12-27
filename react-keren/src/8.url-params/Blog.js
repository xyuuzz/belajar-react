import {
    useParams,
    Link
} from "react-router-dom";

export default function Kita()
{
    const params = useParams();

    return (
        <>
            <h1>Ini adalah view Blog Website Kita</h1>
            <p>Dengan slug sebagai berikut : kita/blog/{params.slug}</p>

            <Link to='/kita'>Kembali</Link>
        </>
    )
}