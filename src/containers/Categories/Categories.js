import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions';
import Heading from '../Heading/Heading';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import { Card } from 'react-bootstrap';
import Spinner from '../../components/UI/Spinner/Spinner';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  redirect = name => {
    this.props.history.push('/categories/' + name);
  };
  render() {
    const wrapperStyle = {
      display: this.props.loading
        ? 'block'
        : this.props.errorMsg.length > 0
        ? 'block'
        : 'grid'
    };
    const content = this.props.loading ? (
      <Spinner />
    ) : this.props.categories ? (
      this.props.categories.map(cat => {
        let excerpt = cat.strCategoryDescription.split('.').slice(0, 1);
        return (
          <div
            onClick={name => this.redirect(cat.strCategory)}
            key={cat.idCategory}
          >
            <Card>
              <Card.Img variant='top' src={cat.strCategoryThumb} />
              <Card.Body>
                <Card.Title>
                  <br />
                  <h2>{cat.strCategory}</h2>
                  <hr />
                </Card.Title>
                <Card.Text>{excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })
    ) : null;
    const error =
      this.props.errorMsg.length > 0 ? (
        <h1 style={{ textAlign: 'center' }}>Sorry! Something went wrong :(</h1>
      ) : null;
    return (
      <div>
        <Heading />
        <Jumbotron location='Categories' />
        <div className='categories-wrapper' style={wrapperStyle}>
          {error}
          {content}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    loading: state.categories.loading,
    errorMsg: state.categories.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actions.fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Categories));
