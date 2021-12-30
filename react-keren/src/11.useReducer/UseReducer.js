import {useReducer} from 'react';

/**
    fungsi hook useReducer adalah versi upgrade / big version dari hook useState, karena useReducer dapat mendefinisikan lebih dari 1 state dan mengolahnya dalam sekali jalan secara sekaligus.
    
    useReducer biasanya digunakan ketika kita memiliki logika yang kompleks dan membutuhkan lebih dari 1 state untuk mengolah nilai.
*/

export default function UseReducer()
{
    // variabel state untuk menampung state - state yang didefinisikan di parameter ke-2. Sedangkan variabel dispatch berbentuk fungsi yang gunanya untuk memanggil callback function pada useReducer.
    const [state, dispatch] = useReducer(
    // variabel state untuk menampung state, sedangkan variabel action untuk menampung argument yang dikirimkan ketika fungsi dispatch dipanggil. bentuk action biasanya adalah objek
    (state, action) => {
        switch(action.type) 
        {
            case 'polindrome': 
            {
                let reverseWord = '';
                for(let i = state.word.length-1; i >= 0; i--) 
                {
                    reverseWord += state.word[i];
                }
                
                return {
                    polindromeStatus: reverseWord === state.word,
                    check: 'polindrome',
                    word: state.word
                };
            }
            case 'countWord': 
            {
                return {
                    word: state.word,
                    result: state.word.length
                };
            }
            case 'changeValue':
            {
                return {
                    word: action.value,
                    check: state.check,
                    polindromeStatus: state.polindromeStatus,
                    result: state.result
                };
            }
            default: 
                return state;
        }
    }, {
        // mendefinikan nilai awal
        word: '', 
        polindromeStatus: true,
        result: '',
        check: '',
    });
    
    return (
        <>
            <h1>Membahas Hook useReducer</h1>
            <input type="text" onChange={(event) => dispatch({type: 'changeValue', value: event.target.value})} value={state.word} />
            
            {
                state.check === 'polindrome' && state.word ?
                <>
                    <h1>Kata yang diinputkan ternyata: 
                        {state.polindromeStatus ? ' adalah Polindrome' : " Tidak Polindrome"}</h1>
                </>
                : 
                state.word && <h1>Jumlah Kata: {state.result}</h1>
            }
            
            {
                state.word &&
                <>
                    {/* ketika memanggil fungsi dispatch, sama seperti lainya, harus di tambahkan method bind terlebih dahulu jika kita memanggil nya tidak didalam fungsi! */}
                    <button onClick={dispatch.bind(this, {type: 'polindrome'})}>Cek Polindrome</button>
                    <button onClick={dispatch.bind(this, {type: 'countWord'})}>Hitung Panjang Kata</button>
                </>
            }
        </>
    );
}