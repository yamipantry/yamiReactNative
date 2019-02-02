import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { recipesThunk } from "../client/store";
import RecipePresentational from "../screens/recipes";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async load() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    this.setState({ loading: false });
  }
  componentDidMount() {
    setTimeout(() => {
      this.load();
    }, 100);
  }

  render() {
    console.log('user pantry', this.props.pantry)
    const { recipes } = this.props || []; // 3,1,4
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <RecipePresentational
        recipes={recipes}
        navigation={this.props.navigation}
        pantry={this.props.pantry}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.result,
    pantry: state.user.pantryItems
  };
};
const mapDispatchToProps = {
  recipesThunk: recipesThunk
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
