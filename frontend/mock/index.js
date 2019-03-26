export const defaultState = {
  product: {
    propertiesByProductId: {
      product_1: {
        properties: [
          {
            label: 'mockone',
            value: 'hi',
          },
          {
            label: 'mocktwo',
            value: 'hello',
          },
        ],
      },
    },
  },
};
export const incorrectPropertiesWithManuals = {
  product: {
    propertiesByProductId: {
      product_1: {
        properties: [
          {
            label: 'Downloads',
            value: 'J.pdf',
          },
          {
            label: 'mocktwo',
            value: 'hello',
          },
        ],
      },
    },
  },
};

export const propertiesWithManuals = {
  product: {
    propertiesByProductId: {
      product_1: {
        properties: [
          {
            label: 'Downloads',
            value: 'B.pdf',
          },
          {
            label: 'mocktwo',
            value: 'hello',
          },
        ],
      },
    },
  },
};

export const mockedConfig = {
  sectionTitle: 'Manuals',
  manualsProperty: 'Downloads',
  manualsPrefixUrl: 'https://example.com/examplePathname',
  typeIndices: [
    {
      searchPattern: 'B.pdf',
      fileType: 'Brochure',
    },
    {
      searchPattern: 'D.pdf',
      fileType: 'Documentation',
    },
  ],
  propertySplit: '\n',
};
