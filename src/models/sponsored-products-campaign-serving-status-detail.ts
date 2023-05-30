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
import { SponsoredProductsCampaignServingStatusReason } from './sponsored-products-campaign-serving-status-reason';
/**
 * 
 * @export
 * @interface SponsoredProductsCampaignServingStatusDetail
 */
export interface SponsoredProductsCampaignServingStatusDetail {
    /**
     * 
     * @type {SponsoredProductsCampaignServingStatusReason}
     * @memberof SponsoredProductsCampaignServingStatusDetail
     */
    name?: SponsoredProductsCampaignServingStatusReason;
    /**
     * A URL with additional information about the status identifier.
     * @type {string}
     * @memberof SponsoredProductsCampaignServingStatusDetail
     */
    helpUrl?: string;
    /**
     * A human-readable description of the status identifier specified in the name field.
     * @type {string}
     * @memberof SponsoredProductsCampaignServingStatusDetail
     */
    message?: string;
}