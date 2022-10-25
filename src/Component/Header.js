import React from 'react'
import { Navbar, Container, Nav, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { BsVinylFill } from 'react-icons/bs';


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <BsVinylFill style={{ marginRight: '10px' }} />
                    <Link to='/'>Vinyl-Store</Link>
                </Navbar.Brand>

                <Nav>
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant='dark'>
                            <FaShoppingCart color='#fff' fontSize='25px' />
                            <Badge bg='none'>{5}</Badge>
                        </Dropdown.Toggle>
                        <FaUserAlt color='#fff' fontSize='25px' style={{ marginLeft: '20px' }} />

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }} >Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header