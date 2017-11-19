import Home from "../components/Home";
import { connect } from 'react-redux';
import { setMessage } from '../actions/action';

function mapStateToProps (state) {
  return {
    set_message: state.set_message
  }
}

const mapActionCreators = {
  setMessage,
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(Home)
