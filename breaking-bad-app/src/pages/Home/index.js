import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchCharacters } from "../../redux/characterSlice"
import "./style.css"
import Masonry from "react-masonry-css"
function Home() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.items);
    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])
    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {
                    characters.map((character) => (
                        <div key={character.char_id}>
                            <img alt={character.name} src={character.img} className="character"/>
                            <div className='name'>{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>
        </div>
    )
}

export default Home