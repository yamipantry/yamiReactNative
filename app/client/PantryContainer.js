import React from "react";
import { connect } from "react-redux";
import Pantry from "../screens/pantry";

class PantryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        pantry: [],
        editMode: false
    }
    this.edit = this.edit.bind(this)
  }
  async componentDidMount() {
      await this.setState({
        pantry: this.props.user.pantryItems
      })
  }
  componentDidUpdate(prevProps) {
      console.log('previous', prevProps)
    // Typical usage (don't forget to compare props):
    if (this.state.editMode !== prevProps.editMode) {
        console.log('wasssup')
    }
  }

  edit(){
      this.setState({
          editMode: true
      })
  }
  render() {
    return <Pantry user={this.props.user} navigation={this.props.navigation} edit={this.edit} editMode={this.state.editMode}/>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(PantryContainer);
