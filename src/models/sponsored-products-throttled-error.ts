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
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
import { SponsoredProductsThrottledErrorReason } from './sponsored-products-throttled-error-reason';
/**
 * Error that represents failure due to API caller exceeding allowed service limits.
 * @export
 * @interface SponsoredProductsThrottledError
 */
export interface SponsoredProductsThrottledError {
    /**
     * 
     * @type {SponsoredProductsThrottledErrorReason}
     * @memberof SponsoredProductsThrottledError
     */
    reason: SponsoredProductsThrottledErrorReason;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsThrottledError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsThrottledError
     */
    message: string;
}
