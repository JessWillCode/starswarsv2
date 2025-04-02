function CharList({chars, setFave}) {
    return (
        <><h1>Char List</h1>
            {
                chars.map((char) =>
                    <div key={char.id}>
                        <img src={char.image} alt="char" style={{ height: '400px' }} />
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