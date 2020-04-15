import React from 'react';
import { removeFeature } from '../actions/RemoveAction';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeFeature(props.payload[props.index])} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state => {
  return {
    payload: state.car.features
  };
};
export default connect(
  mapStateToProps, {removeFeature}
)(AddedFeature);