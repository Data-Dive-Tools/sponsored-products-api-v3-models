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
import { SponsoredProductsBudgetType } from './sponsored-products-budget-type';
/**
 * 
 * @export
 * @interface SponsoredProductsBudget
 */
export interface SponsoredProductsBudget {
    /**
     * 
     * @type {SponsoredProductsBudgetType}
     * @memberof SponsoredProductsBudget
     */
    budgetType: SponsoredProductsBudgetType;
    /**
     * Monetary value
     * @type {number}
     * @memberof SponsoredProductsBudget
     */
    budget: number;
    /**
     * Monetary value
     * @type {number}
     * @memberof SponsoredProductsBudget
     */
    effectiveBudget?: number;
}
