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
import { SponsoredProductsCampaignServingStatus } from './sponsored-products-campaign-serving-status';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignExtendedData
 */
export interface SponsoredProductsDraftCampaignExtendedData {
    /**
     * Last updated date in ISO 8601.
     * @type {Date}
     * @memberof SponsoredProductsDraftCampaignExtendedData
     */
    lastUpdateDateTime?: Date;
    /**
     * 
     * @type {SponsoredProductsCampaignServingStatus}
     * @memberof SponsoredProductsDraftCampaignExtendedData
     */
    servingStatus?: SponsoredProductsCampaignServingStatus;
    /**
     * Creation date in ISO 8601.
     * @type {Date}
     * @memberof SponsoredProductsDraftCampaignExtendedData
     */
    creationDateTime?: Date;
}
