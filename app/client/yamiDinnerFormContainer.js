import React from 'react';
import { YamiDinnerForm } from '../screens/yamiDinnerForm';
import { connect } from 'react-redux';
import { createYamiDinner } from '../client/store/yamiDinners';

class YamiDinnerFormContainer extends React.Component {
  render() {
    const { handleSubmit, user } = this.props;
    console.log(this.props);
    return (
      <YamiDinnerForm
        handleSubmit={handleSubmit}
        user={user}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const object = {
        name: evt.yamiRecipe,
        description: evt.description,
        streetName: evt.streetName,
        city: evt.city,
        state: evt.state,
        zip: evt.zip,
      };
      dispatch(createYamiDinner(object));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(YamiDinnerFormContainer);
