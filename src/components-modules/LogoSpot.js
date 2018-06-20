import React from 'react'
import './LogoSpot.css'

const LogoSpot = ({ src, children }) =>
  <div className="spot-thumbnail">

    <img className="img-ft-thumbnail" src={src} alt="item image" style={{ height: "28vw", width: "60vw"}}/>
    <p className="detail-thumbnail">{children}</p>
  </div>

export default LogoSpot