import React from 'react';
import './Manubar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Manubar = () => {
    return (
        <>

            <Navbar bg="light" variant="light">

                <Container className='d-flex justify-content-between'>
                    <div>
                        <LinkContainer to='home'>
                            <Navbar.Brand>
                                <span className='fw-bold text-danger'>Bizzy</span> <span className='fw-bold text-primary'>Bees</span> <span className='fw-bold text-success'>Kin</span ><span className='fw-bold text-danger'>der</span><span className='fw-bold text-primary'>gar</span><span className='fw-bold text-warning'>ten</span>
                            </Navbar.Brand>
                        </LinkContainer>
                    </div>
                    <div>
                        <Nav className="me-auto fw-bold">
                            <LinkContainer to='/home'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/classes'>
                                <Nav.Link>Classes</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/teachers'>
                                <Nav.Link>Teachers</Nav.Link>
                            </LinkContainer>


                        </Nav>
                    </div>
                </Container>
            </Navbar>

        </>
    );
};

export default Manubar;