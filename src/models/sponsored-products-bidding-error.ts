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
import { SponsoredProductsBiddingErrorReason } from './sponsored-products-bidding-error-reason';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
import { SponsoredProductsMarketplace } from './sponsored-products-marketplace';
/**
 * Errors related to bids
 * @export
 * @interface SponsoredProductsBiddingError
 */
export interface SponsoredProductsBiddingError {
    /**
     * 
     * @type {SponsoredProductsBiddingErrorReason}
     * @memberof SponsoredProductsBiddingError
     */
    reason: SponsoredProductsBiddingErrorReason;
    /**
     * 
     * @type {SponsoredProductsMarketplace}
     * @memberof SponsoredProductsBiddingError
     */
    marketplace?: SponsoredProductsMarketplace;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsBiddingError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsBiddingError
     */
    upperLimit?: string;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsBiddingError
     */
    lowerLimit?: string;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsBiddingError
     */
    message: string;
}
