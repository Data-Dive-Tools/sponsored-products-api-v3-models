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
import { SponsoredProductsKeyword } from './sponsored-products-keyword';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsKeywordsPreviewResponseContent
 */
export interface SponsoredProductsListSponsoredProductsKeywordsPreviewResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsKeywordsPreviewResponseContent
     */
    totalResults?: number;
    /**
     * 
     * @type {Array<SponsoredProductsKeyword>}
     * @memberof SponsoredProductsListSponsoredProductsKeywordsPreviewResponseContent
     */
    keywords?: Array<SponsoredProductsKeyword>;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsKeywordsPreviewResponseContent
     */
    nextToken?: string;
}