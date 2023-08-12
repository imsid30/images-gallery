/* eslint-disable prettier/prettier */
import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import styles from '../components/style/mainPage.module.css'

const Header = (props) => {
    return (  
        <div>
        <Navbar className={styles.navColor} data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/" className={styles.nav}>{props.tittle}</Navbar.Brand>
            </Container>
        </Navbar>
        </div> 
    )
}

export default Header;