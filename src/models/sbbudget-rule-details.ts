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
import { BudgetIncreaseBy } from './budget-increase-by';
import { PerformanceMeasureConditionForSB } from './performance-measure-condition-for-sb';
import { Recurrence } from './recurrence';
import { RuleDuration } from './rule-duration';
import { SBRuleType } from './sbrule-type';
/**
 * 
 * @export
 * @interface SBBudgetRuleDetails
 */
export interface SBBudgetRuleDetails {
    /**
     * 
     * @type {RuleDuration}
     * @memberof SBBudgetRuleDetails
     */
    duration?: RuleDuration;
    /**
     * 
     * @type {Recurrence}
     * @memberof SBBudgetRuleDetails
     */
    recurrence?: Recurrence;
    /**
     * 
     * @type {SBRuleType}
     * @memberof SBBudgetRuleDetails
     */
    ruleType?: SBRuleType;
    /**
     * 
     * @type {BudgetIncreaseBy}
     * @memberof SBBudgetRuleDetails
     */
    budgetIncreaseBy?: BudgetIncreaseBy;
    /**
     * The budget rule name. Required to be unique within a campaign.
     * @type {string}
     * @memberof SBBudgetRuleDetails
     */
    name?: string;
    /**
     * 
     * @type {PerformanceMeasureConditionForSB}
     * @memberof SBBudgetRuleDetails
     */
    performanceMeasureCondition?: PerformanceMeasureConditionForSB;
}
