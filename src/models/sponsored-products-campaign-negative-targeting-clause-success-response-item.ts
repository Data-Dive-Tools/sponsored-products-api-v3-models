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
 * @interface SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem
 */
export interface SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem {
    /**
     * the CampaignNegativeTargets ID
     * @type {string}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem
     */
    campaignNegativeTargetingClauseId?: string;
    /**
     * 
     * @type {SponsoredProductsCampaignNegativeTargetingClause}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem
     */
    campaignNegativeTargetingClauses?: SponsoredProductsCampaignNegativeTargetingClause;
    /**
     * the index of the CampaignNegativeTargets in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem
     */
    index: number;
}
