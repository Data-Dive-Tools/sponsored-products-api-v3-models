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
/**
 * 
 * @export
 * @interface BudgetRuleRecommendation
 */
export interface BudgetRuleRecommendation {
    /**
     * suggested increase percent
     * @type {number}
     * @memberof BudgetRuleRecommendation
     */
    suggestedBudgetIncreasePercent?: number;
    /**
     * rule name for the recomemendation
     * @type {string}
     * @memberof BudgetRuleRecommendation
     */
    ruleName?: string;
    /**
     * rule id for the recomemendation
     * @type {string}
     * @memberof BudgetRuleRecommendation
     */
    ruleId?: string;
}