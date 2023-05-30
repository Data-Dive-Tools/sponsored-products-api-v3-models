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
import { SponsoredProductsDraftKeyword } from './sponsored-products-draft-keyword';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsDraftKeywordsResponseContent
 */
export interface SponsoredProductsListSponsoredProductsDraftKeywordsResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsDraftKeywordsResponseContent
     */
    totalResults?: number;
    /**
     * 
     * @type {Array<SponsoredProductsDraftKeyword>}
     * @memberof SponsoredProductsListSponsoredProductsDraftKeywordsResponseContent
     */
    keywords?: Array<SponsoredProductsDraftKeyword>;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftKeywordsResponseContent
     */
    nextToken?: string;
}
