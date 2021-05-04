import React, { useRef, useContext, useEffect, useState } from 'react'
import { Context } from '../../providers/Context/context'
import Card from '../../components/Card/Card'
import StyledHome from './Home.styled'
import StyledHomeDetails from './HomeDetails.styled'
import Viewdetailes from '../../components/Viewdetailes/Viewdetailes'
import Videogrid from '../../components/Videogrid/Videogrid'

const HomePage = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const [view, setView] = useState(null)
  const [arrCards, setArrCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const sectionRef = useRef(null)

  const getDetails = (element) => {
    const cardObj = {}
    cardObj.id = element.id.videoId
    cardObj.title = element.snippet.title
    cardObj.description = element.snippet.description
    cardObj.link = element.snippet.thumbnails.medium.url
    cardObj.w = element.snippet.thumbnails.medium.width
    cardObj.h = element.snippet.thumbnails.medium.height
    return cardObj
  }

  useEffect(() => {
    const defRows = []
    if (selectedCard && state.view === 'homeDetails') {
      defRows.push(
        <StyledHomeDetails key="homeDetails">
          <Viewdetailes
            id={selectedCard.id}
            key={`details_${selectedCard.id}`}
            title={selectedCard.title}
            description={selectedCard.description}
            link={selectedCard.link}
            w={setArrCards.w}
            h={setArrCards.h}
          />
          <Videogrid id={selectedCard.id} key={`grid_${selectedCard.id}`}>
            {arrCards}
          </Videogrid>
        </StyledHomeDetails>
      )

      setView(defRows)
    }
  }, [arrCards, selectedCard, state.view])

  useEffect(() => {
    const getHome = () => {
      const rows = []
      const arr = state.data
      arr.slice(1).forEach((element) => {
        const updElement = getDetails(element)

        rows.push(
          <Card
            detailed
            id={updElement.id}
            key={updElement.id}
            title={updElement.title}
            description={updElement.description}
            link={updElement.link}
            w={updElement.w}
            h={updElement.h}
            customClickEvent={() => {
              setSelectedCard(updElement)
              dispatch({ type: 'SET_VIEW', payload: 'homeDetails' })
            }}
          />
        )
      })

      const defRows = (
        <StyledHome key="home" ref={sectionRef}>
          {rows}
        </StyledHome>
      )
      setView(defRows)
      setArrCards(rows)
    }

    if (state.data.length) {
      getHome()
    }
  }, [state.data, state.view, state.target, dispatch])

  return <>{view}</>
})

export default HomePage
