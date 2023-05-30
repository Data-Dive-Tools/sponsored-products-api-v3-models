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
import { SPBudgetRule } from './spbudget-rule';
/**
 * 
 * @export
 * @interface GetSPBudgetRulesForAdvertiserResponse
 */
export interface GetSPBudgetRulesForAdvertiserResponse {
    /**
     * A list of rules created by the advertiser.
     * @type {Array<SPBudgetRule>}
     * @memberof GetSPBudgetRulesForAdvertiserResponse
     */
    budgetRulesForAdvertiserResponse?: Array<SPBudgetRule>;
    /**
     * To retrieve the next page of results, call the same operation and specify this token in the request. If the `nextToken` field is empty, there are no further results.
     * @type {string}
     * @memberof GetSPBudgetRulesForAdvertiserResponse
     */
    nextToken?: string;
}
