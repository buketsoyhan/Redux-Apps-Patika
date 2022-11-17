import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllQuotes } from "../../redux/quotesSlice"
function Quotes() {
    const data = useSelector((state) => state.quotes.items)
    const status = useSelector((state) => state.quotes.status)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllQuotes())
    }, [dispatch])

    return (
        <div>
            {status ==="succeeded" && data.map((item)=><div>{item.quote}</div>)}
        </div>
    )
}

export default Quotes