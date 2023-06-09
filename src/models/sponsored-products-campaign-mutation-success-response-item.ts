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
import { SponsoredProductsCampaign } from './sponsored-products-campaign';
/**
 * 
 * @export
 * @interface SponsoredProductsCampaignMutationSuccessResponseItem
 */
export interface SponsoredProductsCampaignMutationSuccessResponseItem {
    /**
     * the campaign ID
     * @type {string}
     * @memberof SponsoredProductsCampaignMutationSuccessResponseItem
     */
    campaignId?: string;
    /**
     * the index of the campaign in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsCampaignMutationSuccessResponseItem
     */
    index: number;
    /**
     * 
     * @type {SponsoredProductsCampaign}
     * @memberof SponsoredProductsCampaignMutationSuccessResponseItem
     */
    campaign?: SponsoredProductsCampaign;
}
