import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Description.css'
function Description() {
  return (
    <div className='section desc' >
       <div className="cardDesc">
        <div className="descIcon">
        <FontAwesomeIcon icon={faArrowDown} />
        <small>Min</small>
        </div>
        <h2>26&deg; C</h2>
       </div>
    </div>
  )
}

export default Description