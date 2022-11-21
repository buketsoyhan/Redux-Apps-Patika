import { useEffect, useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux';
import { gainScore, lossScore, activeToggle, increment } from "../../redux/memorySlice"
import Confetti from 'react-confetti'

function Main() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.memory.items)
  const selected = useSelector((state) => state.memory.selectedAll)
  const [selectedCards, setSelectedCards] = useState([]);

  let choiceOne, choiceTwo;

  useEffect(() => {
    if (selectedCards[0] && selectedCards[1]) {

      choiceOne = selectedCards[0].key;
      choiceTwo = selectedCards[1].key;

      if (choiceOne === choiceTwo) {
        setSelectedCards([]);
        dispatch(increment())
        dispatch(gainScore())
      } else {
        setTimeout(() => {
          dispatch(activeToggle(selectedCards[0].id))
          dispatch(activeToggle(selectedCards[1].id))
          dispatch(lossScore())

          setSelectedCards([])
        }, 500)
      }
    }
  }, [selectedCards])

  function handleClick(card) {
    dispatch(activeToggle(card.id))
    setSelectedCards([...selectedCards, card])
  }

  return (
    <section className='memoryGame'>
      {
        cards.map(card => (
          <div
            key={card.id}
            className={`memoryCard ${card.status ? 'active' : ''} ${selectedCards.length === 2 ? 'disabled' : ''}`} onClick={() => handleClick(card)}>
            <div className='back'>{""}</div>
            <div className='front'>
              <img src={card.img} alt="" />
            </div>
          </div>
        ))
      }
      {
        selected > 0 &&
        <Confetti />
      }
    </section>
  )
}

export default Main