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
import { SponsoredProductsTargetingClauseSetupErrorReason } from './sponsored-products-targeting-clause-setup-error-reason';
/**
 * Errors related to targeting clause setup
 * @export
 * @interface SponsoredProductsTargetingClauseSetupError
 */
export interface SponsoredProductsTargetingClauseSetupError {
    /**
     * 
     * @type {SponsoredProductsTargetingClauseSetupErrorReason}
     * @memberof SponsoredProductsTargetingClauseSetupError
     */
    reason: SponsoredProductsTargetingClauseSetupErrorReason;
    /**
     * 
     * @type {SponsoredProductsMarketplace}
     * @memberof SponsoredProductsTargetingClauseSetupError
     */
    marketplace?: SponsoredProductsMarketplace;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsTargetingClauseSetupError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsTargetingClauseSetupError
     */
    message: string;
}
