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
import { SponsoredProductsBudgetErrorReason } from './sponsored-products-budget-error-reason';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
/**
 * 
 * @export
 * @interface SponsoredProductsBudgetError
 */
export interface SponsoredProductsBudgetError {
    /**
     * 
     * @type {SponsoredProductsBudgetErrorReason}
     * @memberof SponsoredProductsBudgetError
     */
    reason: SponsoredProductsBudgetErrorReason;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsBudgetError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsBudgetError
     */
    upperLimit?: string;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsBudgetError
     */
    lowerLimit?: string;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsBudgetError
     */
    message: string;
}
