import fallback from './assets/fallback.png';
import {useState} from "react";

function CharList({chars, setFave, fallbackSrc = fallback.src}) {
    const [imgError, setImgError] = useState(false);

    return (
        <><h1>Char List</h1>
            {
                chars.map((char) =>
                    <div key={char.id}>
                        <img
                            src={imgError ? fallbackSrc : char.image}
                            alt="character picture"
                            style={{ height: '400px' }}
                            onError={() => setImgError(true)}
                        />
                        <h2>{char.name}</h2>
                        <button onClick={() => setFave(char)}>
                            Favorite
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default CharList;