import React from 'react'

import PropTypes from 'prop-types'

export default function NavbarComponent(props) {
    return (

        <>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">{props.abouttext}</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </>

    )
}

NavbarComponent.propTypes = {title:PropTypes.string.isRequired,
                    abouttext:PropTypes.string,
                    }

NavbarComponent.defaultProps ={
                     title:'Set title here',
                    abouttext:'About text here',
}