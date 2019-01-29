import React from "react";
import { connect } from "react-redux";
import SingleRecipe from "../screens/singleRecipe";
import { getRecipe } from '../client/store'

class SingleRecipeContainer extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getRecipe(this.props.navigation.state.params.id);
  }
  render() {
      console.log('this props', this.props)
    return <SingleRecipe recipe={this.props.singleRecipe}/>;
  }
}

const mapDispatchToProps = {
  getRecipe: getRecipe
};

const mapStateToProps = state => {
  return {
    singleRecipe: state.singleRecipe
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRecipeContainer);
