import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';

// SVG Content
const content = `
  <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"/>
`;

/**
 * The StoreLocator icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const FileIcon = props => <Icon content={content} {...props} viewBox="0 0 384 512" />;

export default FileIcon;
