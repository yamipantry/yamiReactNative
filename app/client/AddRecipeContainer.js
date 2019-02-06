import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from '../screens/RecipeForm'

class AddRecipeContainer extends React.Component {
    constructor() {
        super()
    }

    handleChange = (evt) => {
        console.log(evt)
    }

    handleSubmit = (evt) => {

    }

  render() {
    return (
        <RecipeForm 
        handleChange={this.handleChange}
        />
    )
}
}

const mapState = state => {
    return {}
}

const mapDispatch = {

}


export default connect(
  mapState,
  mapDispatch
)(AddRecipeContainer);
