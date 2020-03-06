import {UserDetails} from '../statics/GlobalStatics';

const data = {
  // user: {username: 'kartik', email: 'lakhanikartik9@gmail.com', age: '23'},
  user: {},
};

export default (state = data, action) => {
  switch (action.type) {
    case UserDetails:
      return;
    default:
      return state;
  }
};
