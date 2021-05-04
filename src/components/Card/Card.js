import React, { useContext } from 'react'
import StyledCard from './Card.styled'
import StyledStandardCard from './CardStandard.styled'
import { Context } from '../../providers/Context/context'

const Card = React.memo((props) => {
  const { state } = useContext(Context)
  const adjustTitle = (str) => {
    const arr = str.split(' ')
    return arr.length > 5 ? `${arr.slice(0, 5).join(' ')}...` : `${arr.join(' ')}...`
  }

  const imageTag = (
    <div className="card__image">
      <img
        className="imageInside"
        src={props.link}
        alt={props.title}
        width={props.w}
        height={props.h}
      />
    </div>
  )

  return (
    <>
      {props.detailed ? (
        <StyledCard
          id={props.id}
          link={props.link}
          toggle={state.theme}
          onClick={props.customClickEvent}
        >
          {imageTag}
          <div className="card__info">
            <div className="card__info__title">{props.title}</div>
            <div className="card__info__description"> {props.description}</div>
          </div>
        </StyledCard>
      ) : (
        <StyledStandardCard
          id={props.id}
          link={props.link}
          toggle={state.theme}
          onClick={props.customClickEvent}
        >
          {imageTag} <div className="card__info__title">{adjustTitle(props.title)}</div>{' '}
        </StyledStandardCard>
      )}
    </>
  )
})

export default Card
