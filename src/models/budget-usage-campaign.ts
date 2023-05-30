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
 * @interface BudgetUsageCampaign
 */
export interface BudgetUsageCampaign {
    /**
     * Budget usage percentage (spend / available budget) for the given budget policy.
     * @type {number}
     * @memberof BudgetUsageCampaign
     */
    budgetUsagePercent?: number;
    /**
     * ID of requested resource
     * @type {string}
     * @memberof BudgetUsageCampaign
     */
    campaignId?: string;
    /**
     * Last evaluation time for budget usage
     * @type {Date}
     * @memberof BudgetUsageCampaign
     */
    usageUpdatedTimestamp?: Date;
    /**
     * An index to maintain order of the campaignIds
     * @type {number}
     * @memberof BudgetUsageCampaign
     */
    index?: number;
    /**
     * Budget amount of resource requested
     * @type {number}
     * @memberof BudgetUsageCampaign
     */
    budget?: number;
}
