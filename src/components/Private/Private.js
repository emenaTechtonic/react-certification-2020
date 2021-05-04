import React, { useRef, useContext, useEffect, useState } from 'react'
import { Context } from '../../providers/Context/context'
import Card from '../Card/Card'
import StyledPrivate from './Private.styled'
import StyledPrivateDetails from './PrivateDetails.styled'
import Viewdetailes from '../Viewdetailes/Viewdetailes'
import Videogrid from '../Videogrid/Videogrid'

const Private = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const [view, setView] = useState(null)
  const [arrCards, setArrCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const defRows = []
    if (selectedCard) {
      defRows.push(
        <StyledPrivateDetails key="favoriteDetails">
          <Viewdetailes
            id={selectedCard.id}
            key={`details_${selectedCard.id}`}
            title={selectedCard.title}
            description={selectedCard.description}
            link={setSelectedCard.link}
            w={setArrCards.w}
            h={setArrCards.h}
          />
          {state.favorites.length > 1 ? (
            <Videogrid id={selectedCard.id} key={`grid_${selectedCard.id}`}>
              {arrCards}
            </Videogrid>
          ) : null}
        </StyledPrivateDetails>
      )

      setView(defRows)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCard])

  useEffect(() => {
    const getFavorites = () => {
      const rows = []
      state.favorites.forEach((element) => {
        rows.push(
          <Card
            detailed
            id={element.id}
            key={element.id}
            title={element.title}
            description={element.description}
            link={element.link}
            w={element.w}
            h={element.h}
            customClickEvent={() => {
              setSelectedCard(element)
            }}
          />
        )
      })

      const defRows = (
        <StyledPrivate key="favorites" ref={sectionRef}>
          {rows}
        </StyledPrivate>
      )

      setView(defRows)
      setArrCards(rows)
      setSelectedCard(null)
    }

    getFavorites()
  }, [dispatch, state.favorites, state.view])

  return <>{view}</>
})

export default Private
