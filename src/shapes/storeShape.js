import { func, shape } from 'prop-types';

export default shape({
  subscribe: func.isRequired,
  dispatch: func.isRequired,
  getState: func.isRequired
});
