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
import { SponsoredProductsCurrencyErrorReason } from './sponsored-products-currency-error-reason';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
/**
 * Errors related to currency
 * @export
 * @interface SponsoredProductsCurrencyError
 */
export interface SponsoredProductsCurrencyError {
    /**
     * 
     * @type {SponsoredProductsCurrencyErrorReason}
     * @memberof SponsoredProductsCurrencyError
     */
    reason: SponsoredProductsCurrencyErrorReason;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsCurrencyError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsCurrencyError
     */
    message: string;
}
