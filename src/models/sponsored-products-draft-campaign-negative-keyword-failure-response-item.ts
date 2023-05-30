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
import { SponsoredProductsDraftCampaignNegativeKeywordMutationError } from './sponsored-products-draft-campaign-negative-keyword-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem
 */
export interface SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem {
    /**
     * the index of the draft in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsDraftCampaignNegativeKeywordMutationError>}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem
     */
    errors?: Array<SponsoredProductsDraftCampaignNegativeKeywordMutationError>;
}
