import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/black-logo.jpeg';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import Autocomplete from './Autocomplete/Autocomplete';

class Heading extends Component {
  state = {
    display: 'none',
    collapseButtonClicked: false
  };

  changeDisplay = () => {
    const display = this.state.collapseButtonClicked ? 'none' : 'block';
    this.setState(prevState => {
      return {
        display: display,
        collapseButtonClicked: !this.state.collapseButtonClicked
      };
    });
  };
  render() {
    return (
      <header>
        <div className='header-top'>
          <a href='/'>
            <img className='logo' src={logo} alt='logo' />
          </a>
          <div className='input'>
            <input type='search' placeholder='Find a recipe...' />
            <button>
              <i className='fa fa-search' />
            </button>
            <div className='collapse-button' onClick={this.changeDisplay}>
              <i className='fas fa-bars' />
            </div>
            {/* <Autocomplete /> */}
          </div>
        </div>
        <div className='header-bottom'>
          <Navbar expand='md'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/' className='active'>
                  Home
                </Nav.Link>
                <NavDropdown title='Browse recipes' id='nav-dropdown'>
                  <NavDropdown.Item href='/categories'>
                    All categories
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/categories/Starter'>
                    Starter
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/categories/Dessert'>
                    Dessert
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/categories/Miscellaneous'>
                    Miscellaneous
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#link'>Random</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <SlideDown className='my-dropdown-slidedown'>
            <div
              className='vertical-menu'
              style={{ display: this.state.display }}
            >
              <a href='#a' className='first'>
                Homepage
              </a>
              <a href='#a'>Browse Recipes</a>
              <a href='#a'>Blog</a>
              <a href='#a'>Random</a>
            </div>
          </SlideDown>

          <div className='socials'>
            <a href='#1'>
              <i className='fab fa-facebook-square' />
            </a>
            <a href='#1'>
              <i className='fab fa-instagram' />
            </a>
            <a href='#1'>
              <i className='fab fa-twitter' />
            </a>
            <a href='#1'>
              <i className='fab fa-snapchat' />
            </a>
            <a href='#1'>
              <i className='fab fa-pinterest' />
            </a>
            <a href='#1'>
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Heading;
