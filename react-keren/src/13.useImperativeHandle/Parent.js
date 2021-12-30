import { useRef } from "react";
import ButtonChild from './UseImperativeHandle';

export default function ParentUIH()
{
    const button = useRef(null);
    return (
        <>
            {/* 
                fungsi updateTg() didefinisikan di child component, dan berkat bantuan hook useImperativeHandle, kita dapat mengaksesnya dengan perantara hook useRef. 
            */}
            
            <button onClick={() => button.current.updateTg() }>Button Parent</button>
            <ButtonChild ref={button}/>
        </>
    )
}