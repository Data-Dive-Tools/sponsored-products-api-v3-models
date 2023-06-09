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
import { AsinsThemeBasedBidRecommendationRequestBidding } from './asins-theme-based-bid-recommendation-request-bidding';
import { TargetingExpressionList } from './targeting-expression-list';
/**
 * 
 * @export
 * @interface AsinsThemeBasedBidRecommendationRequest
 */
export interface AsinsThemeBasedBidRecommendationRequest {
    /**
     * The list of ad ASINs in the ad group.
     * @type {Array<string>}
     * @memberof AsinsThemeBasedBidRecommendationRequest
     */
    asins: Array<string>;
    /**
     * 
     * @type {TargetingExpressionList}
     * @memberof AsinsThemeBasedBidRecommendationRequest
     */
    targetingExpressions: TargetingExpressionList;
    /**
     * 
     * @type {AsinsThemeBasedBidRecommendationRequestBidding}
     * @memberof AsinsThemeBasedBidRecommendationRequest
     */
    bidding: AsinsThemeBasedBidRecommendationRequestBidding;
    /**
     * The bid recommendation type.
     * @type {string}
     * @memberof AsinsThemeBasedBidRecommendationRequest
     */
    recommendationType: AsinsThemeBasedBidRecommendationRequestRecommendationTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum AsinsThemeBasedBidRecommendationRequestRecommendationTypeEnum {
    BIDSFORNEWADGROUP = 'BIDS_FOR_NEW_AD_GROUP'
}

