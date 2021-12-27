import { useEffect } from 'react';

export default function Profile()
{
    useEffect(() => {
        document.title = 'Profile'
    }, [])
    
    return (
        <div className='section'>
            <h1 className='title'>Profile Saya</h1>
            <img src="https://asset.kompas.com/crops/78NjPguTP8OK9DYYPjdY3AmPj00=/0x0:1500x1000/750x500/data/photo/2020/08/14/5f3615920efd9.jpg" alt="Foto Profile" className="profile-pict" />
            <p className='section-desc'>Perkenalkan nama saya Maulana Yusuf Muhibbin biasa dipanggil Yusuf. Saya adalah seorang Web Developer yang sekarang sedang bersekolah di SMKN 2 Semarang jurusan RPL kelas 11. Saya memiliki minat di bidang Web Development apalagi di bagian Backend Development. Namun sekarang saya juga masih belajar dan berlatih untuk bisa berkoordinasi di bidang FrontEnd Development</p>
        </div>
    )
}