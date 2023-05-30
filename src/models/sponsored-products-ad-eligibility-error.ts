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
import { SponsoredProductsAdEligibilityErrorReason } from './sponsored-products-ad-eligibility-error-reason';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
import { SponsoredProductsMarketplace } from './sponsored-products-marketplace';
/**
 * Errors related to ad eligibility
 * @export
 * @interface SponsoredProductsAdEligibilityError
 */
export interface SponsoredProductsAdEligibilityError {
    /**
     * 
     * @type {SponsoredProductsAdEligibilityErrorReason}
     * @memberof SponsoredProductsAdEligibilityError
     */
    reason: SponsoredProductsAdEligibilityErrorReason;
    /**
     * 
     * @type {SponsoredProductsMarketplace}
     * @memberof SponsoredProductsAdEligibilityError
     */
    marketplace?: SponsoredProductsMarketplace;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsAdEligibilityError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsAdEligibilityError
     */
    message: string;
}
