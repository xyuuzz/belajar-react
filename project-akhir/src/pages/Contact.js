import { useEffect } from 'react';
import '../App.css';

export default function Contact()
{
    useEffect(() => {
        document.title = "Contact"
    }, [])

    return (
        <>
            <h1 className='title'>Contact Me</h1>
            
            <ul className='menu-contact'>
                <li className='menu-contact-item'>
                    <a target='_blank' href="https://www.github.com/xyuuzz">Github</a>
                </li>
                <li className='menu-contact-item'>
                    <a target='_blank' href="https://www.facebook.com/yuu.kunn.54/">Facebook</a>
                </li>
                <li className='menu-contact-item'>
                    <a target='_blank' href="http://wa.me/087731941581">Whatsapp</a>
                </li>
                <li className='menu-contact-item'>
                    <a target='_blank' href="https://www.instagram.com/mauyuu_">Instagram</a>
                </li>
                <li className='menu-contact-item'>
                    <a target='_blank' href="mailto:maulanayuusuf023@gmail.com">Email</a>
                </li>
            </ul>
        </>
    )
}