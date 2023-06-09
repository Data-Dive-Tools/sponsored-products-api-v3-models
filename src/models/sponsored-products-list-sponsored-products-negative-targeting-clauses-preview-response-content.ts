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
import { SponsoredProductsNegativeTargetingClause } from './sponsored-products-negative-targeting-clause';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesPreviewResponseContent
 */
export interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesPreviewResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesPreviewResponseContent
     */
    totalResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesPreviewResponseContent
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<SponsoredProductsNegativeTargetingClause>}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesPreviewResponseContent
     */
    negativeTargetingClauses?: Array<SponsoredProductsNegativeTargetingClause>;
}
