import React, { useContext, useEffect, useState } from 'react'
import StyledViewdetailes from './Viewdetailes.styled'
import { Context } from '../../providers/Context/context'
import { isElementIn } from '../../utils/fns'
import { AuthContext } from '../../providers/Auth/auth'

const Viewdetailes = React.memo((props) => {
  const { state, saveFavoriteCard, removeFavoriteCard } = useContext(Context)
  const { authenticated } = useContext(AuthContext)
  const [favoriteStatus, setFavoriteStatus] = useState(false)
  const saveToFavorite = () => {
    saveFavoriteCard(props)
    setFavoriteStatus(true)
  }
  const removeFromFavorite = () => {
    removeFavoriteCard(props)
    setFavoriteStatus(false)
  }
  const detectStatusCard = () => {
    if (favoriteStatus) {
      removeFromFavorite()
    } else saveToFavorite()
  }
  useEffect(() => {
    if (isElementIn(props.id, state.favorites)) setFavoriteStatus(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <StyledViewdetailes toggle={state.theme}>
      <iframe
        className="iframe"
        key={`${props.id}iframe`}
        title={props.title}
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${props.id}`}
      />

      <div className="statusCard">
        <div className="iframeTitle">{props.title}</div>
        {authenticated ? (
          <button type="button" className="toggleFavor" onClick={detectStatusCard}>
            {favoriteStatus ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        ) : null}
      </div>
      <div className="iframeDescription">{props.description}</div>
    </StyledViewdetailes>
  )
})

export default Viewdetailes
