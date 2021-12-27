import {
    Link,
    Outlet,
} from 'react-router-dom';

export default function Parent()
{
    return (
        <>
            <h1>Halaman Parent dengan 1 anak</h1>
            <ul>
                <li>
                    <Link to='/parent/child'>Child Element</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}