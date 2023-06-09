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
import { SPBudgetRuleDetails } from './spbudget-rule-details';
import { State } from './state';
/**
 * 
 * @export
 * @interface SPCampaignBudgetRule
 */
export interface SPCampaignBudgetRule {
    /**
     * 
     * @type {State}
     * @memberof SPCampaignBudgetRule
     */
    ruleState?: State;
    /**
     * Epoch time of budget rule update. Read-only.
     * @type {number}
     * @memberof SPCampaignBudgetRule
     */
    lastUpdatedDate?: number;
    /**
     * Epoch time of budget rule creation. Read-only.
     * @type {number}
     * @memberof SPCampaignBudgetRule
     */
    createdDate?: number;
    /**
     * 
     * @type {SPBudgetRuleDetails}
     * @memberof SPCampaignBudgetRule
     */
    ruleDetails?: SPBudgetRuleDetails;
    /**
     * The budget rule identifier.
     * @type {string}
     * @memberof SPCampaignBudgetRule
     */
    ruleId: string;
    /**
     * The budget rule evaluation status. Read-only.
     * @type {string}
     * @memberof SPCampaignBudgetRule
     */
    ruleStatus?: string;
}
