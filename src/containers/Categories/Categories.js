import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Heading from '../../components/Heading/Heading';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import { Card } from 'react-bootstrap';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <Heading />
        <Jumbotron location='Categories' />
        <div className='categories-wrapper'>
          {this.props.categories.map(cat => {
            let excerpt = cat.strCategoryDescription.split('.').slice(0, 1);
            console.log(excerpt);
            return (
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
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
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
)(Categories);
