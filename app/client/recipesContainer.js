import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { recipesThunk } from "../client/store";
import RecipePresentational from "../screens/recipes";
import NoRecipes from '../client/modals/NoRecipes'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async load() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    await this.props.recipesThunk()
    this.setState({ loading: false });
  }

  async componentDidMount() {
    setTimeout(() => { 
      this.load();
    }, 50);
  }

  render() {
    const { recipes } = this.props || []; // 3,1,4
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    if(recipes.length === 0){
      return (
        <NoRecipes 
        navigation={this.props.navigation}
        />
      )
    }
    return (
      <RecipePresentational
        recipes={recipes}
        navigation={this.props.navigation}
        pantry={this.props.pantry}
        loading={this.state.loading}
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
