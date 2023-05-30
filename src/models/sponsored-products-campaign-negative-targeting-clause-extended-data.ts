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
import { SponsoredProductsKeywordServingStatus } from './sponsored-products-keyword-serving-status';
import { SponsoredProductsKeywordServingStatusDetail } from './sponsored-products-keyword-serving-status-detail';
/**
 * 
 * @export
 * @interface SponsoredProductsCampaignNegativeTargetingClauseExtendedData
 */
export interface SponsoredProductsCampaignNegativeTargetingClauseExtendedData {
    /**
     * Last updated date in ISO 8601.
     * @type {Date}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseExtendedData
     */
    lastUpdateDateTime?: Date;
    /**
     * 
     * @type {SponsoredProductsKeywordServingStatus}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseExtendedData
     */
    servingStatus?: SponsoredProductsKeywordServingStatus;
    /**
     * The serving status reasons of the CampaignNegativeTargetingClause
     * @type {Array<SponsoredProductsKeywordServingStatusDetail>}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseExtendedData
     */
    servingStatusDetails?: Array<SponsoredProductsKeywordServingStatusDetail>;
    /**
     * Creation date in ISO 8601.
     * @type {Date}
     * @memberof SponsoredProductsCampaignNegativeTargetingClauseExtendedData
     */
    creationDateTime?: Date;
}