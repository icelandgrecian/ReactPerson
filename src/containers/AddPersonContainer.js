import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPerson } from '../actions';
import AddPerson from '../components/AddPerson';


const mapStateToProps  = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ addPerson }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson)