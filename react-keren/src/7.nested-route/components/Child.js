import {Link} from 'react-router-dom';

export default function Parent()
{
    return (
        <>
            <h1>Halaman Child dengan 1 Parent Component diatasnya</h1>
             <ul>
                <li>
                    <Link to='/parent'>Parent Element</Link>
                </li>
            </ul>
        </>
    )
}