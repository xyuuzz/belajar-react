import {
    Link,
    Routes,
    Route
} from 'react-router-dom';
import DaftarLink from './DaftarLink';
import Blog from './Blog';
import Vidio from './Vidio';

/*
* Url Params / URl parameter adalah sebuah params yang bersifat dinamic dan dapat ditangkap oleh react.
* Cara menangkap value params adalah dengan menggunakan hooks yang telah disediakan benama useParams dari react-router-dom.
*
* Dengan menggunakan ini, kita dapat sesuka hati menuliskan params yang dibutuhkan oleh kita, sehingga memudahkan kita untuk memvalidasi view sesuai params yang diakses.
*
* Cara menggunakan URl Params adalah sebagai berikut :

    path='/a/:slug'
    nanti cara kita mengaksesnya adalah dengan menggunakan useParams.slug

    Disesuaikan saja dengan nama dari dinamic URl nya.
* */

export default function UrlParams()
{
    return (
        <>
            <Routes>
                <Route path='/kita' element={<DaftarLink />} />
                <Route path='/kita/blog/:slug' element={<Blog />} />
                <Route path='/kita/vidio/:slug' element={<Vidio />} />
            </Routes>
        </>
    )
}