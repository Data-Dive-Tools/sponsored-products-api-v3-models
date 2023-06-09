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
import { KeywordTarget } from './keyword-target';
import { KeywordTargetRankRecommendationRequest } from './keyword-target-rank-recommendation-request';
/**
 * This request type is used to retrieve recommended keyword targets for an existing ad group. Set the recommendationType to KEYWORD_FOR_ADGROUP to use this request type.
 * @export
 * @interface AdGroupKeywordTargetRankRecommendationRequest
 */
export interface AdGroupKeywordTargetRankRecommendationRequest extends KeywordTargetRankRecommendationRequest {
    /**
     * The identifier of the campaign
     * @type {string}
     * @memberof AdGroupKeywordTargetRankRecommendationRequest
     */
    campaignId: string;
    /**
     * The recommendationType to retrieve recommended keyword targets for an existing ad group.
     * @type {string}
     * @memberof AdGroupKeywordTargetRankRecommendationRequest
     */
    recommendationType: AdGroupKeywordTargetRankRecommendationRequestRecommendationTypeEnum;
    /**
     * The identifier of the ad group
     * @type {string}
     * @memberof AdGroupKeywordTargetRankRecommendationRequest
     */
    adGroupId: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AdGroupKeywordTargetRankRecommendationRequestRecommendationTypeEnum {
    KEYWORDSFORADGROUP = 'KEYWORDS_FOR_ADGROUP'
}

