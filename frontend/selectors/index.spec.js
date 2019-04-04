import {
  defaultState,
  incorrectPropertiesWithManuals,
  propertiesWithManuals,
  mockedConfig,
} from '../mock';
import { getManualUrls } from './index';

jest.mock('../helpers/getConfig', () => () => mockedConfig);

describe('selectors', () => {
  const selectorProps = { productId: 'product_1' };
  describe('getManualUrls', () => {
    it('should return an empty array when no property is found', () => {
      const result = getManualUrls(defaultState, selectorProps);
      expect(result).toBeInstanceOf(Array);
    });
    it('should return an empty array download when incorrect value for download', () => {
      const result = getManualUrls(incorrectPropertiesWithManuals, selectorProps);
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
    it('should return an array download value', () => {
      const result = getManualUrls(propertiesWithManuals, selectorProps);
      expect(result).toBeInstanceOf(Array);
      expect(result[0].label)
        .toEqual(propertiesWithManuals.product.propertiesByProductId.product_1.properties[0].value);
    });
  });
});
