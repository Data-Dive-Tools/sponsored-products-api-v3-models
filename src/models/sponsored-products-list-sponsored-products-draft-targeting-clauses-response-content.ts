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
import { SponsoredProductsDraftTargetingClause } from './sponsored-products-draft-targeting-clause';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsDraftTargetingClausesResponseContent
 */
export interface SponsoredProductsListSponsoredProductsDraftTargetingClausesResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsDraftTargetingClausesResponseContent
     */
    totalResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftTargetingClausesResponseContent
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftTargetingClause>}
     * @memberof SponsoredProductsListSponsoredProductsDraftTargetingClausesResponseContent
     */
    targetingClauses?: Array<SponsoredProductsDraftTargetingClause>;
}
