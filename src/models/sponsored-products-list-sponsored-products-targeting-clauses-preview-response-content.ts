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
import { SponsoredProductsTargetingClause } from './sponsored-products-targeting-clause';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsTargetingClausesPreviewResponseContent
 */
export interface SponsoredProductsListSponsoredProductsTargetingClausesPreviewResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsTargetingClausesPreviewResponseContent
     */
    totalResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsTargetingClausesPreviewResponseContent
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<SponsoredProductsTargetingClause>}
     * @memberof SponsoredProductsListSponsoredProductsTargetingClausesPreviewResponseContent
     */
    targetingClauses?: Array<SponsoredProductsTargetingClause>;
}
