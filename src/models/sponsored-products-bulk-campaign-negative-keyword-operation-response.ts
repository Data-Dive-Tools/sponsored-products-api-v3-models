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
import { SponsoredProductsCampaignNegativeKeywordFailureResponseItem } from './sponsored-products-campaign-negative-keyword-failure-response-item';
import { SponsoredProductsCampaignNegativeKeywordSuccessResponseItem } from './sponsored-products-campaign-negative-keyword-success-response-item';
/**
 * 
 * @export
 * @interface SponsoredProductsBulkCampaignNegativeKeywordOperationResponse
 */
export interface SponsoredProductsBulkCampaignNegativeKeywordOperationResponse {
    /**
     * 
     * @type {Array<SponsoredProductsCampaignNegativeKeywordSuccessResponseItem>}
     * @memberof SponsoredProductsBulkCampaignNegativeKeywordOperationResponse
     */
    success?: Array<SponsoredProductsCampaignNegativeKeywordSuccessResponseItem>;
    /**
     * 
     * @type {Array<SponsoredProductsCampaignNegativeKeywordFailureResponseItem>}
     * @memberof SponsoredProductsBulkCampaignNegativeKeywordOperationResponse
     */
    error?: Array<SponsoredProductsCampaignNegativeKeywordFailureResponseItem>;
}
