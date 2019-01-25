import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getLiveOverview } from "./../actions";

class HomeContainer extends Component {
  render() {
    return <div />;
  }

  componentWillMount() {
    this.props.getLiveOverview();
  }
}

function mapStateToProps(state) {
  return {
    overview: state.footballReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLiveOverview }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
