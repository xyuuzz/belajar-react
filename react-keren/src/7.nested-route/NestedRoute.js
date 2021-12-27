import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Parent from './components/Parent';
import Child from './components/Child';

/*
* Nested Route sebenarnya sama seperti route biasa, namun yang membedakannya adalah jika route biasa maka hanya ada 1 params di belakang domain, sementara itu nested route ada lebih dari 1 params di belakang domain.
* Udah sih bedanya
* */

export default function NestedRoute()
{
    return (
        <>
            <h1>Ini adalah halaman parent dari Component yang membahas Nested Route</h1>
            <ul>
                <li>
                    {/*
                        Contoh Single Route
                    */}
                    <Link to='/parent'>Parent Element</Link>
                </li>
                <li>
                    {/*
                        Contoh Nested Route
                    */}
                    <Link to='/parent/child'>Child Element</Link>
                </li>
            </ul>
        </>
    )
}