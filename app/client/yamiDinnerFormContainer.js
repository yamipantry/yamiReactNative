import React from 'react';
import { YamiDinnerForm } from '../screens/yamiDinnerForm';
import { connect } from 'react-redux';
import { createYamiDinner } from '../client/store/yamiDinners';

class YamiDinnerFormContainer extends React.Component {
  render() {
    const { handleSubmit, user } = this.props;
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
      const id = evt.id;
      const object = {
        streetName: evt.streetName,
        city: evt.city,
        state: evt.state,
        zip: evt.zip,
      };
      dispatch(createYamiDinner(id, object));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(YamiDinnerFormContainer);
