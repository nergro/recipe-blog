import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/black-logo.jpeg';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import Autocomplete from '../../components/Autocomplete/Autocomplete';

class Heading extends Component {
  state = {
    display: 'none',
    collapseButtonClicked: false,
    search: ''
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

  onInputChange = event => {
    this.setState({
      search: event.target.value
    });

    this.props.fetchSearch(event.target.value);
  };
  render() {
    return (
      <header>
        <div className='header-top'>
          <a href='/'>
            <img className='logo' src={logo} alt='logo' />
          </a>
          <div className='input'>
            <input
              type='search'
              placeholder='Find a recipe...'
              onChange={e => this.onInputChange(e)}
            />
            <button>
              <i className='fa fa-search' />
            </button>
            <div className='collapse-button' onClick={this.changeDisplay}>
              <i className='fas fa-bars' />
            </div>
            <Autocomplete
              meals={this.props.meals}
              loading={this.props.loading}
              show={this.state.search.length > 0}
            />
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
              <a href='/' className='first'>
                Homepage
              </a>
              <a href='/categories'>Browse Recipes</a>
              <a href='#a'>Random Recipe</a>
            </div>
          </SlideDown>

          <div className='socials'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-square' />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              href='https://www.snapchat.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-snapchat' />
            </a>
            <a
              href='https://www.pinterest.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-pinterest' />
            </a>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.search.meals,
    loading: state.search.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: search => dispatch(actions.fetchSearch(search))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heading);
