import { connect } from 'react-redux';
import { getManualUrls } from '../../selectors';

/**
 *
 * @param {Object} state The current state.
 * @param {Object} props The props.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  manualUrls: getManualUrls(state, props),
});

export default connect(mapStateToProps);
