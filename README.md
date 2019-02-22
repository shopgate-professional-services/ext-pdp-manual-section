# Shopgate Connect - Extension pdp-manual-section
Extension will render a section for pdf downloads on the Product Detail Page. Extension takes required configurations in order to render properly.

## Configuration
Add the pdp-manual-section extension to your Shopgate Connect deployment config.

```
(...)
  {
    "id": "@shopgate-project/pdp-manual-section",
    "version": "1.0.0"
  }
(...)
```

Set the following values in your Shopgate Connect Admin:
* sectionTitle - (string) text for section title
* manualsProperty - (string) property key value
  * (required) read via selector to determine if section should be rendered with page links
* manualsPrefixUrl - (string) prefix url value for pdf page
  * (required) used to construct href
* typeIndices - {array of Objects} used to match a search pattern with corresponding document type.
  * searchPattern - (string) search pattern to used to determine document type
    * (required) determines regex
  * fileType - (string) corresponding file type for searchpattern.
    * (required) - Document type name that will be rendered
* propertySplit - (string) character used to split url's transferred via manualsProperty
  * (required) used for constructing array for filtering

## Example config
'''
{
  "propertySplit": "\n",
  "typeIndices": 
    [ 
      {
        "searchPattern": "B.pdf",
        "fileType": "Brochure"
      },
      {
        "searchPattern": "D.pdf",
        "fileType": "Documentation"
      }
    ],
  "manualsPrefixUrl": "https://www.shopgate.com/productdownloads/",
  "manualsProperty": "downloads",
  "sectionTitle": "Manuals"
}
'''
## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension pdp-manual-section is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

