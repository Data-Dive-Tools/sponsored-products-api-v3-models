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
import { SponsoredProductsAsinOwnershipErrorReason } from './sponsored-products-asin-ownership-error-reason';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
/**
 * Errors related to author asin ownership
 * @export
 * @interface SponsoredProductsAsinOwnershipError
 */
export interface SponsoredProductsAsinOwnershipError {
    /**
     * 
     * @type {SponsoredProductsAsinOwnershipErrorReason}
     * @memberof SponsoredProductsAsinOwnershipError
     */
    reason: SponsoredProductsAsinOwnershipErrorReason;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsAsinOwnershipError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsAsinOwnershipError
     */
    message: string;
}
