import { node, arrayOf, oneOfType } from 'prop-types';

export default oneOfType([
  arrayOf(node),
  node
]);
