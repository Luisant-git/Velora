import  { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center ">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> 2024 </span>
            <Link to="#!"  className="text-dark fw-medium">Infinite</Link>. Designed with <span className="bi bi-heart-fill text-danger"></span> 
            All rights reserved </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer