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
import { SponsoredProductsGlobalCampaign } from './sponsored-products-global-campaign';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalCampaignMutationSuccessResponseItem
 */
export interface SponsoredProductsGlobalCampaignMutationSuccessResponseItem {
    /**
     * the campaign ID
     * @type {string}
     * @memberof SponsoredProductsGlobalCampaignMutationSuccessResponseItem
     */
    campaignId?: string;
    /**
     * the index of the campaign in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsGlobalCampaignMutationSuccessResponseItem
     */
    index: number;
    /**
     * 
     * @type {SponsoredProductsGlobalCampaign}
     * @memberof SponsoredProductsGlobalCampaignMutationSuccessResponseItem
     */
    campaign?: SponsoredProductsGlobalCampaign;
}
