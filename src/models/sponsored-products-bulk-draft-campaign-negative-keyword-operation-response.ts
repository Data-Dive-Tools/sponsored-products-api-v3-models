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
import { SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem } from './sponsored-products-draft-campaign-negative-keyword-failure-response-item';
import { SponsoredProductsDraftCampaignNegativeKeywordSuccessResponseItem } from './sponsored-products-draft-campaign-negative-keyword-success-response-item';
/**
 * 
 * @export
 * @interface SponsoredProductsBulkDraftCampaignNegativeKeywordOperationResponse
 */
export interface SponsoredProductsBulkDraftCampaignNegativeKeywordOperationResponse {
    /**
     * 
     * @type {Array<SponsoredProductsDraftCampaignNegativeKeywordSuccessResponseItem>}
     * @memberof SponsoredProductsBulkDraftCampaignNegativeKeywordOperationResponse
     */
    success?: Array<SponsoredProductsDraftCampaignNegativeKeywordSuccessResponseItem>;
    /**
     * 
     * @type {Array<SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem>}
     * @memberof SponsoredProductsBulkDraftCampaignNegativeKeywordOperationResponse
     */
    error?: Array<SponsoredProductsDraftCampaignNegativeKeywordFailureResponseItem>;
}