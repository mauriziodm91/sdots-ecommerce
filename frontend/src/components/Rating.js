import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { faStarHalfAlt, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(
  far,
  faStar,
  faStarHalfAlt
) /*importando componentes de fontawesome de manera global*/
const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span className='rating-star'>
        <FontAwesomeIcon
          icon={
            value >= 1
              ? "star"
              : value >= 0.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        />
      </span>
      <span className='rating-star'>
        <FontAwesomeIcon
          icon={
            value >= 2
              ? "star"
              : value >= 1.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        />
      </span>
      <span className='rating-star'>
        <FontAwesomeIcon
          icon={
            value >= 3
              ? "star"
              : value >= 2.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        />
      </span>
      <span className='rating-star'>
        <FontAwesomeIcon
          icon={
            value >= 4
              ? "star"
              : value >= 3.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        />
      </span>
      <span className='rating-star'>
        <FontAwesomeIcon
          icon={
            value >= 5
              ? "star"
              : value >= 4.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        />
      </span>
      {/*la linea inferior devuelve texto si este existe*/}
      <span>{text && text}</span>
    </div>
  )
}

export default Rating
