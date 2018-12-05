import { connect } from 'react-redux';
import People from '../components/People';
import { bindActionCreators } from 'redux';
import { deletePerson } from '../actions';

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ deletePerson }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);