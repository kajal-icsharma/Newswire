import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';


const NavBar = () => {
	return (
		<React.Fragment>
			<Navbar className="yellotail p-2 px-5" variant="dark">
				<LinkContainer to={'/'}>
					<Navbar.Brand><h1>NewsWire</h1>
					<h5>Discover the world through our news</h5>
					</Navbar.Brand>
				</LinkContainer>
				<LinkContainer to={'/'}>
					<Navbar.Brand>
					<Image src="https://img.freepik.com/free-photo/shiny-night-city_1127-8.jpg?w=1060&t=st=1685113637~exp=1685114237~hmac=b7438f155529e918bf319b0b6aa305eeadac450f8969ee9f42e94e2f245bc3ca" fluid />
					</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<Nav className="mb-4 p-2 px-5">
				<Nav.Item>
					<LinkContainer to={'/'}>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/news/new'}>
						<Nav.Link>New News</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/contact'}>
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
		</React.Fragment>
	);
};

export default NavBar;
