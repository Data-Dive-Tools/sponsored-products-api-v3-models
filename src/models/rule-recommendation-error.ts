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
import { CampaignOptimizationRuleError } from './campaign-optimization-rule-error';
import { RuleCampaignId } from './rule-campaign-id';
/**
 * 
 * @export
 * @interface RuleRecommendationError
 */
export interface RuleRecommendationError {
    /**
     * 
     * @type {RuleCampaignId}
     * @memberof RuleRecommendationError
     */
    campaignId?: RuleCampaignId;
    /**
     * 
     * @type {CampaignOptimizationRuleError}
     * @memberof RuleRecommendationError
     */
    error?: CampaignOptimizationRuleError;
}
