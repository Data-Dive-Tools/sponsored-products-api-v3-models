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
import { SponsoredProductsDraftCampaignBudgetType } from './sponsored-products-draft-campaign-budget-type';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignBudget
 */
export interface SponsoredProductsDraftCampaignBudget {
    /**
     * 
     * @type {SponsoredProductsDraftCampaignBudgetType}
     * @memberof SponsoredProductsDraftCampaignBudget
     */
    budgetType: SponsoredProductsDraftCampaignBudgetType;
    /**
     * Monetary value
     * @type {number}
     * @memberof SponsoredProductsDraftCampaignBudget
     */
    budget: number;
}