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
import { SponsoredProductsMarketplace } from './sponsored-products-marketplace';
import { SponsoredProductsValueLimitErrorReason } from './sponsored-products-value-limit-error-reason';
/**
 * Errors related to range constraints violations
 * @export
 * @interface SponsoredProductsRangeError
 */
export interface SponsoredProductsRangeError {
    /**
     * 
     * @type {SponsoredProductsValueLimitErrorReason}
     * @memberof SponsoredProductsRangeError
     */
    reason: SponsoredProductsValueLimitErrorReason;
    /**
     * 
     * @type {SponsoredProductsMarketplace}
     * @memberof SponsoredProductsRangeError
     */
    marketplace?: SponsoredProductsMarketplace;
    /**
     * allowed values
     * @type {Array<string>}
     * @memberof SponsoredProductsRangeError
     */
    allowed?: Array<string>;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsRangeError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * optional upper limit
     * @type {string}
     * @memberof SponsoredProductsRangeError
     */
    upperLimit?: string;
    /**
     * optional lower limit
     * @type {string}
     * @memberof SponsoredProductsRangeError
     */
    lowerLimit?: string;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsRangeError
     */
    message: string;
}
