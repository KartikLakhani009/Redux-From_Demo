import {UserDetails} from '../statics/GlobalStatics';

export const Adddata = payload => {
  return {
    type: UserDetails,
    payload,
  };
};
