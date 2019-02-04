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

  load = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    await this.props.allBookmarks(this.props.id);
    this.setState({ loading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.load();
    }, 10);
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
