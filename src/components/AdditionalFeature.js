import React from 'react';
import { addFeature } from '../actions/AddAction';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> props.addFeature(props.payload[props.index])} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    payload: state.additionalFeatures
  };
};
export default connect(
  mapStateToProps, {addFeature}
)(AdditionalFeature);