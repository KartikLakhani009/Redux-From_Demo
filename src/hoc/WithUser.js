import {Adddata} from '../actions/UserDataAddAction';
import {connect} from 'react-redux';

mapDispatchToProps = dispatch => ({
  StoreUserData: data => dispatch(Adddata(data)),
});

mapStateToProps = state => {
  return {
    Userdata: state.USERAUTH,
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
