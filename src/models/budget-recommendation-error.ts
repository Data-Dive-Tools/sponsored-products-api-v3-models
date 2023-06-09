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
import { SPTORBudgetRecommendationError } from './sptorbudget-recommendation-error';
/**
 * 
 * @export
 * @interface BudgetRecommendationError
 */
export interface BudgetRecommendationError {
    /**
     * encrypted campaignId
     * @type {string}
     * @memberof BudgetRecommendationError
     */
    campaignId: string;
    /**
     * Correlate the recommendation to the campaign index in the request. Zero-based
     * @type {number}
     * @memberof BudgetRecommendationError
     */
    index: number;
    /**
     * 
     * @type {SPTORBudgetRecommendationError}
     * @memberof BudgetRecommendationError
     */
    error: SPTORBudgetRecommendationError;
}
