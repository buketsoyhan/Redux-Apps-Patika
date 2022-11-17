import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchCharacters } from "../../redux/characterSlice"
import "./style.css"
import Masonry from "react-masonry-css"
import { Link } from "react-router-dom"
function Home() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.items);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const status = useSelector((state) => state.characters.status);
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])
    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {
                    characters.map((character, idx) => (
                        <div key={idx} >
                            <Link to={`/char/${character.char_id}`}>
                                <img alt={character.name} src={character.img} className="character" />
                                <div className='name'>{character.name}</div>
                            </Link>
                        </div>
                    ))
                }
            </Masonry>
            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {
                    hasNextPage && status !== "loading" &&
                    <button onClick={() => dispatch(fetchCharacters(nextPage))}>Load more</button>
                }
            </div>
        </div>
    )
}

export default Home