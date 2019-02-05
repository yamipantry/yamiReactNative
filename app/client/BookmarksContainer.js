import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {allBookmarks} from './store'
import Bookmarks from "../screens/bookmarks";
import { connect } from 'react-redux'

class BookmarksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.allBookmarks(this.props.id);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
        </View>
      );
    }
    return (
      <Bookmarks 
      bookmarks={this.props.bookmarks}
      navigation={this.props.navigation}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    id: state.user.id,
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps = {
  allBookmarks: allBookmarks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksContainer);
