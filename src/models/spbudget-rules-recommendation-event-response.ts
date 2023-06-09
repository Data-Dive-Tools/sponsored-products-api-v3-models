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
import { SPBudgetRulesRecommendationEvent } from './spbudget-rules-recommendation-event';
/**
 * Special events with date range and suggested budget increase.
 * @export
 * @interface SPBudgetRulesRecommendationEventResponse
 */
export interface SPBudgetRulesRecommendationEventResponse {
    /**
     * A list of recommended special events with date range and suggested budget increase.
     * @type {Array<SPBudgetRulesRecommendationEvent>}
     * @memberof SPBudgetRulesRecommendationEventResponse
     */
    recommendedBudgetRuleEvents?: Array<SPBudgetRulesRecommendationEvent>;
}
