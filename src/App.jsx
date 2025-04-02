import {useEffect, useState} from 'react'
import './App.css'
import CharList from "./CharList.jsx";

function App() {
    const [chars, setChars] = useState([]);
    const [fave, setFave] = useState({});

    useEffect(() => {
        const fetchChars = async () => {
            const res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
            const data = await res.json();
            setChars(data);
        }
        fetchChars();
    }, []);

    return (
        <>
            <h1>Star Wars Characters</h1>
            <CharList chars={chars} fave={fave} setFave={setFave}/>
        </>
    )
}

export default App