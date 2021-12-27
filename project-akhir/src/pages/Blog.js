import { 
    useState,
    useEffect
} from 'react';
import { Link } from 'react-router-dom';

export default function Blog()
{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( async () => {
        const request = fetch('https://api.spaceflightnewsapi.net/v3/articles')
        const response = await (await request).json()
        
        setArticles(response)
        setLoading(false)
        document.title = "Blog"
    }, []);
    
    return (
        <section className='section'>
            <h1 className='title'>Blog Saya</h1>
            <p className='section-desc'>Daftar Blog yang sudah pernah saya tulis:</p>
            <hr />
            {
                !loading ?
                <div>
                    {articles.map(el => {
                        return (
                            <div key={el.id}>
                                <article className='article' >
                                    <h1>{el.title} </h1>
                                    <p>Website Berita: <b>{el.newsSite}</b></p>
                                    <Link to={`/blog/${el.id}`}>Read More..</Link>
                                </article>
                                <hr />
                            </div>
                        )
                    })}
                </div>
                :
                // gif loading
                <img className='loading-gif' src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading" />
            }
        </section>
    )
}