import { useEffect } from "react"


export default function Child({letter})
{
    useEffect(() => {
        console.log('execute')
    }, [letter])

    return <h1>{letter()}</h1>
}