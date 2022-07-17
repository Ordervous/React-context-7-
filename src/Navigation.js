import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'
import ThemeContext from "./ThemeContext"
import ThemeToggle from "./ThemeToggle"

function Navigation(props) {
    return (
        <ThemeContext.Consumer>
            {({ variant }) => (
                <Navbar bg={variant} variant={variant}>
                    <Container>
                        <Navbar.Brand href="#home">Context Example App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <ThemeToggle />
                    </Container>
                </Navbar>
            )}
        </ThemeContext.Consumer>
    )
}

export default Navigation