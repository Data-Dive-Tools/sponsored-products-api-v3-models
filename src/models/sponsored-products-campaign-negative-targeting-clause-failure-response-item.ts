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
import { SponsoredProductsCampaignNegativeTargetsMutationError } from './sponsored-products-campaign-negative-targets-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsCampaignNegativeTargetingClauseFailureResponseItem
 */
export interface SponsoredProductsCampaignNegativeTargetingClauseFailureResponseItem {
    /**
     * the index of the CampaignNegativeTargets in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsCampaignNegativeTargetsMutationError>}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseFailureResponseItem
     */
    errors?: Array<SponsoredProductsCampaignNegativeTargetsMutationError>;
}
