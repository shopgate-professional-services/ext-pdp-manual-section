import React from 'react';
import { RouteContext } from '@shopgate/pwa-common/context';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import ManualsSection from '../../components/ManualsSection';
import getConfig from '../../helpers/getConfig';
import connect from './connector';

const config = getConfig();

const ManualsSectionContext = connect(({
  manualUrls,
}) => (
  <ManualsSection
    config={config}
    manualUrls={manualUrls}
  />
));
/**
 * @returns {JSX}
 */
const ProductDescriptionAfter = () => {
  if (config.manualsProperty) {
    return (
      <RouteContext.Consumer>
        {({ params }) =>
          <ManualsSectionContext productId={hex2bin(params.productId)} />
      }
      </RouteContext.Consumer>
    );
  }
  return null;
};

export default ProductDescriptionAfter;

export { ManualsSectionContext as UnwrappedManualsSection };
