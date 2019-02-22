import { createSelector } from 'reselect';
import { getProductPropertiesUnfiltered } from '@shopgate/pwa-common-commerce/product/selectors/product';
import getConfig from '../helpers/getConfig';

const {
  manualsProperty, manualsPrefixUrl, typeIndices, propertySplit,
} = getConfig();

export const getManualUrls = createSelector(
  getProductPropertiesUnfiltered,
  (properties) => {
    const parsedManualUrls = [];
    if (!properties) {
      return parsedManualUrls;
    }

    const manualUrls = properties.find(property => (
      property.label === manualsProperty
    ));
    if (manualUrls) {
      manualUrls.value.split(propertySplit).forEach((url) => {
        const filteredObject = typeIndices.filter((index) => {
          const regex = new RegExp(index.searchPattern, 'gi');
          return regex.test(url);
        });
        if (filteredObject.length > 0) {
          parsedManualUrls.push({
            label: filteredObject[0].searchPattern,
            url: manualsPrefixUrl + url,
            type: filteredObject[0].fileType,
          });
        }
      });
    }

    return parsedManualUrls;
  }
);
