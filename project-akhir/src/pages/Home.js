import { useEffect } from 'react';
import '../App.css';

export default function Home()
{
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <section className='section'>
            <h1 className="title">Selamat Datang di Website Kita</h1>
            <p className='section-desc'>
                Selamat Bersenang - senang di website <b>Kita</b> <br/>
                Website yang menyediakan tiker untuk berselancar di pantai, membaca blog, dan masih banyak lagi.
            </p>
        </section>
    )
}