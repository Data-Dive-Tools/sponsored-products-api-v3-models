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
import { SponsoredProductsCampaignMutationFailureResponseItem } from './sponsored-products-campaign-mutation-failure-response-item';
import { SponsoredProductsCampaignMutationSuccessResponseItem } from './sponsored-products-campaign-mutation-success-response-item';
/**
 * 
 * @export
 * @interface SponsoredProductsBulkCampaignOperationResponse
 */
export interface SponsoredProductsBulkCampaignOperationResponse {
    /**
     * 
     * @type {Array<SponsoredProductsCampaignMutationSuccessResponseItem>}
     * @memberof SponsoredProductsBulkCampaignOperationResponse
     */
    success?: Array<SponsoredProductsCampaignMutationSuccessResponseItem>;
    /**
     * 
     * @type {Array<SponsoredProductsCampaignMutationFailureResponseItem>}
     * @memberof SponsoredProductsBulkCampaignOperationResponse
     */
    error?: Array<SponsoredProductsCampaignMutationFailureResponseItem>;
}