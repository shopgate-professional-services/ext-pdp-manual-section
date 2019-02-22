import React from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Link';
import FileIcon from '../../icons/FileIcon';
import styles from './style';

/**
 * @param {Object} config configurations.
 * @param {Object} manualUrls manual urls to link.
 * @param {string} productId product ID.
 * @returns {JSX}
 */
const ManualsSection = ({ config, manualUrls }) => {
  if (!manualUrls || !manualUrls.length) {
    return null;
  }

  return (
    <div className={styles.spacer}>
      <div className={styles.container}>
        <span className={styles.headline}>{config.sectionTitle}</span>
        {manualUrls.map(value => ((
          <Link
            key={value.label}
            className={styles.singleLink}
            href={value.url}
          >
            <FileIcon className={styles.icon} />&nbsp;&nbsp; Open {value.type}
          </Link>
        )))}
      </div>
    </div>
  );
};

ManualsSection.propTypes = {
  config: PropTypes.shape().isRequired,
  manualUrls: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
};

ManualsSection.defaultProps = {
  manualUrls: null,
};
export default ManualsSection;
