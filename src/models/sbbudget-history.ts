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
import { SBRuleBasedBudget } from './sbrule-based-budget';
/**
 * 
 * @export
 * @interface SBBudgetHistory
 */
export interface SBBudgetHistory {
    /**
     * To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results.
     * @type {string}
     * @memberof SBBudgetHistory
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<SBRuleBasedBudget>}
     * @memberof SBBudgetHistory
     */
    history?: Array<SBRuleBasedBudget>;
}
