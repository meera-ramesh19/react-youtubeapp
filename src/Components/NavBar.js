import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode.js';
import './NavBar.css';
import youtube_logo from '../assets/yt_logo_rgb_dark.png';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div className='App container py-3'>
        <div className='fluid border-bottom-1 shadow'>
          <div className='col-md-12 pt-0 pb-0 m-0'>
            <Navbar
              style={{ backgroundColor: '#ff0000' }}
              collapseOnSelect
              expand='md'
              variant='light'
              className='navbar'
            >
              {/* <LinkContainer to='/'> */}
              <Navbar.Brand className='font-weight-bold text-muted'>
                <img
                  style={{ color: 'white', backgroundColor: '#CD5C5C' }}
                  src={youtube_logo}
                  width='150'
                  height='30'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
              {/* </LinkContainer> */}
              <Navbar.Brand>
                <DarkMode />
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Collapse className='justify-content-end'>
                <Nav activeKey={window.location.pathname}>
                  <LinkContainer to='/'>
                    <Nav.Link>
                      <h4 className='linkText'>Home</h4>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about'>
                    <Nav.Link>
                      <h4 className='linkText'>About</h4>
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      //     <nav className='navbar'>
      //       <ul>
      //         <li>
      //        <div className='logo'>
      //        <img src={youtube_logo} width='150px' alt='Youtube logo' />
      //        </div>
      //        </li>
      //     <li>
      //       <Link to='/'>Home </Link>
      //     </li>
      //     <li>
      //       <Link to='/about'>About</Link>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default NavBar;
