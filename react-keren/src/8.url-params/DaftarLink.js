import {
    Link,
    Outlet
} from "react-router-dom";

export default function DaftarLink()
{
    return (
        <>
            <h1>Website Blog dan Vidio "Kita"</h1>

            <h3>Silahkan Lihat Vidio Berikut</h3>
            <ul>
                <li>
                    <Link to='/kita/vidio/vidio-1'>Vidio 1</Link>
                </li>
                <li>
                    <Link to='/kita/vidio/vidio-2'>Vidio 2</Link>
                </li>
                <li>
                    <Link to='/kita/vidio/vidio-3'>Vidio 3</Link>
                </li>
                <li>
                    <Link to='/kita/vidio/vidio-4'>Vidio 4</Link>
                </li>
            </ul>

            <h3>Silahkan Baca Blog Berikut</h3>
            <ul>
                <li>
                    <Link to='/kita/blog/blog-1'>Blog Baca 1</Link>
                </li>
                <li>
                    <Link to='/kita/blog/blog-2'>Blog Baca 2</Link>
                </li>
                <li>
                    <Link to='/kita/blog/blog-3'>Blog Baca 3</Link>
                </li>
                <li>
                    <Link to='/kita/blog/blog-4'>Blog Baca 4</Link>
                </li>
            </ul>

            <Outlet />
        </>
    )
}