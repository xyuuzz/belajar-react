import {
    Link,
    useLocation
} from "react-router-dom";


export default function ListLink()
{
    const location = useLocation()

    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/*
                            hasil render dari component link adalah tag a dengan href sesuai dengan value property to.
                            => <a href="/">Home</a>
                            => <a href="/about">About</a>
                        */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to='/nested/route'>Nested Route</Link>
                    </li>
                    <li>
                        <Link to='/kita'>Website Kita</Link>
                    </li>
                    <li>
                        {
                            location.pathname === '/dashboard' ?
                                <Link to='/login'>Logout Website</Link>
                                :
                                <Link to='/login'>Login Website</Link>
                        }
                    </li>
                    <li>
                        <Link to='/use-reducer'>Hook useReducer</Link>
                    </li>
                    <li>
                        <Link to='/use-layout-effect'>Hook Layout Effect</Link>
                    </li>
                    <li>
                        <Link to='/use-imperative-handle'>Hook Use Imperative Handle</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}