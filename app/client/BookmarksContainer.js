import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { allBookmarks } from './store';
import Bookmarks from '../screens/bookmarks';
import { connect } from 'react-redux';

class BookmarksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rank: 0,
    };
    this.ratingCompleted = this.ratingCompleted.bind(this);
    this.addToRanking = this.addToRanking.bind(this);
  }

  ratingCompleted(rating) {
    this.setState({
      rank: rating,
    });
  }

  async addToRanking() {
    const recipeId = this.props.id;
    console.log(recipeId);
    const rank = this.state.rank || 1;
    const obj = {
      recipeId,
      rank,
    };
    await this.props.postRanking(obj);
  }

  async componentDidMount() {
    await this.props.allBookmarks(this.props.id);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <View />;
    }
    return (
      <Bookmarks
        bookmarks={this.props.bookmarks}
        navigation={this.props.navigation}
        ranking={this.addToRanking}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    id: state.user.id,
    bookmarks: state.bookmarks,
  };
};

const mapDispatchToProps = {
  allBookmarks: allBookmarks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksContainer);
