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
import { PerformanceMetricValue } from './performance-metric-value';
import { SPBudgetRule } from './spbudget-rule';
/**
 * 
 * @export
 * @interface SPRuleBasedBudget
 */
export interface SPRuleBasedBudget {
    /**
     * Epoch time of budget rule execution.
     * @type {number}
     * @memberof SPRuleBasedBudget
     */
    executionTime?: number;
    /**
     * 
     * @type {SPBudgetRule}
     * @memberof SPRuleBasedBudget
     */
    appliedRule?: SPBudgetRule;
    /**
     * The budget value.
     * @type {number}
     * @memberof SPRuleBasedBudget
     */
    ruleBasedBudgetValue?: number;
    /**
     * The daily budget value.
     * @type {number}
     * @memberof SPRuleBasedBudget
     */
    dailyBudgetValue?: number;
    /**
     * 
     * @type {PerformanceMetricValue}
     * @memberof SPRuleBasedBudget
     */
    performanceMetric?: PerformanceMetricValue;
}
