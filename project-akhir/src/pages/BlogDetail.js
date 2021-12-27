import {
    useEffect,
    useState
} from 'react';
import {
    useParams,
    Link
} from 'react-router-dom';
import NotFound from './error/404';

export default function BlogDetail()
{
    /**
     * NB: semua hooks yang disediakan oleh React, harus dideklarasikan langsung di dalam component (recomen tempatnya adalah dipaling atas sebelum mendefinisikan method method action yang dibutuhkan. )
    */ 
     
    // mendeklarasikan state-state yang dibutuhkan
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    
    const params = useParams();
    
    useEffect( async () => {
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
        
        // ketika req nya mengembalikan status code selain dari 2xx, maka req tsb akan dianggap gagal alias error, sehingga kita harus menghandle nya. fetch memiliki property ok yang berisi nilai boolean apakah request berhasil atau gagal.
        if(!request.ok)
        {
            // jika request gagal, maka set nilai notFound menjadi true dan hentikan fungsi nya.
            return setNotFound(true)
        }
        
        // ketika request berjalan dengan lancar, maka lanjutkan proses nya
        const response = await request.json()
        setArticle(response)
        setLoading(false)
        document.title = response.title;
    }, [])
    
    // ketika notFound memiliki nilai true, maka kembalikan component NotFound 
    if(notFound)
    {
        return <NotFound />
    }
    
    return (
        <section className='section'>
            {
                !loading ? 
                <section>
                    <br />
                    <h1 className='title'>{article.title}</h1>
                    
                    <div className="section-desc">
                        <p>Dipublikasikan pada: 
                            <time className='published-at'>{new Date(article.publishedAt).toLocaleDateString()}</time>
                        </p>
                        <img className='article-img' src={article.imageUrl} alt="gambar blog"/>
                        <p>Link Berita: <a href={article.url} target='_blank'>Klik di sini</a>
                        </p>
                        <Link to='/blog'>Kembali</Link>
                    </div>
                </section>
                :
                <img className='loading-gif' src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading" />
            }
        </section>
    )
}