import React from "react";
import { connect } from "react-redux";
import SingleRecipe from "../screens/singleRecipe";
import { getRecipe } from "../client/store";
import { View, Text } from 'react-native'

class SingleRecipeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async load() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    await this.props.getRecipe(this.props.navigation.state.params.id);
    this.setState({ loading: false });
  }
  componentDidMount() {
    setTimeout(() => {
      this.load();
    }, 100);
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return <SingleRecipe recipe={this.props.singleRecipe} pantry={this.props.pantry}/>;
  }
}

const mapDispatchToProps = {
  getRecipe: getRecipe
};

const mapStateToProps = state => {
  return {
    singleRecipe: state.singleRecipe,
    pantry: state.user.pantryItems
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRecipeContainer);
