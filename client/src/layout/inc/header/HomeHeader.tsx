import React , {useState} from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

const HomeHeader : React.FC = (props:any) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    const navlist = [
        {link:'/',name:'Home'},
        {link:'/faq',name:'FAQ'},
        {link:'/about-us',name:'About Us'},
    ]

    return (
        <div className="mgc-header">
            <Container>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">StreamLadder</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    {navlist.map((nav,index)=>(
                        <NavItem key={index}>
                            <NavLink href={nav.link}>{ nav.name }</NavLink>
                        </NavItem>
                    ))}
                    
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Login
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Login With Twitch
                            </DropdownItem>
                            <DropdownItem>
                                Login With Facebook
                            </DropdownItem>
                            <DropdownItem>
                                Login With Youtube
                            </DropdownItem>
                            {/* <DropdownItem divider /> */}
                        
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default HomeHeader