/* tslint:disable */
/* eslint-disable */
/**
 * Sponsored Products
 *  
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * The type of nagative targeting expression. You can only specify values for the following predicates: | Predicate | Description | | --- | --- | | `ASIN_BRAND_SAME_AS` | Target the brand that is the same as the brand expressed. | | `ASIN_SAME_AS` | Target an ASIN that is the same as the ASIN expressed. | | `OTHER` | Other Type.   |
 * @export
 * @enum {string}
 */
export enum SponsoredProductsNegativeTargetingExpressionPredicateType {
    ASINBRANDSAMEAS = 'ASIN_BRAND_SAME_AS',
    ASINSAMEAS = 'ASIN_SAME_AS',
    OTHER = 'OTHER'
}

