import React from 'react'
import {Navbar} from 'react-bootstrap'
import styles from './header.module.css'

const Header = (props) => {
    return (  
        <div>  
        <Navbar bg="light" data-bs-theme="light">
            <Navbar.Brand href="/" className={styles.nav}>{props.tittle}</Navbar.Brand>
        </Navbar>
        </div> 
    )
}

export default Header;