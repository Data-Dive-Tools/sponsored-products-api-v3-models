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
import { SponsoredProductsCampaignNegativeTargetingClause } from './sponsored-products-campaign-negative-targeting-clause';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent
 */
export interface SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent {
    /**
     * The total number of entities
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent
     */
    totalResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<SponsoredProductsCampaignNegativeTargetingClause>}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent
     */
    campaignNegativeTargetingClauses?: Array<SponsoredProductsCampaignNegativeTargetingClause>;
}
