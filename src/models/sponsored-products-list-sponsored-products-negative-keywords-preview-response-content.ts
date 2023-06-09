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
import { SponsoredProductsNegativeKeyword } from './sponsored-products-negative-keyword';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewResponseContent
 */
export interface SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewResponseContent {
    /**
     * 
     * @type {Array<SponsoredProductsNegativeKeyword>}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewResponseContent
     */
    negativeKeywords?: Array<SponsoredProductsNegativeKeyword>;
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewResponseContent
     */
    totalResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewResponseContent
     */
    nextToken?: string;
}
