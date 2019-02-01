import React from "react";
import { connect } from "react-redux";
import SingleRecipe from "../screens/singleRecipe";
import { getRecipe } from "../client/store";
import { View, Text } from "react-native";
import { postRanking } from "./store";

class SingleRecipeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      rank: 0
    };
    this.ratingCompleted = this.ratingCompleted.bind(this);
    this.addToRanking = this.addToRanking.bind(this);
  }

  async ratingCompleted(rating) {
    await this.setState({
      rank: rating
    });
  }

  async addToRanking() {
    const recipeId = this.props.navigation.state.params.id;
    const userId = this.props.user.id;
    const rank = this.state.rank;
    const obj = {
      recipeId,
      userId,
      rank
    };
    await this.props.postRanking(obj);
  }

  load() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    this.setState({ loading: false });
  }

  componentDidMount() {
      this.load();
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <SingleRecipe
        recipe={this.props.singleRecipe}
        pantry={this.props.user.pantryItems}
        navigation={this.props.navigation}
        star={this.ratingCompleted}
        ranking={this.addToRanking}
      />
    );
  }
}

const mapDispatchToProps = {
  getRecipe: getRecipe,
  postRanking: postRanking
};

const mapStateToProps = state => {
  return {
    singleRecipe: state.singleRecipe,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRecipeContainer);
