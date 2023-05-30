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
import { SponsoredProductsBiddingError } from './sponsored-products-bidding-error';
import { SponsoredProductsBillingError } from './sponsored-products-billing-error';
import { SponsoredProductsDuplicateValueError } from './sponsored-products-duplicate-value-error';
import { SponsoredProductsEntityNotFoundError } from './sponsored-products-entity-not-found-error';
import { SponsoredProductsEntityQuotaError } from './sponsored-products-entity-quota-error';
import { SponsoredProductsEntityStateError } from './sponsored-products-entity-state-error';
import { SponsoredProductsInternalServerError } from './sponsored-products-internal-server-error';
import { SponsoredProductsMalformedValueError } from './sponsored-products-malformed-value-error';
import { SponsoredProductsMissingValueError } from './sponsored-products-missing-value-error';
import { SponsoredProductsOtherError } from './sponsored-products-other-error';
import { SponsoredProductsRangeError } from './sponsored-products-range-error';
import { SponsoredProductsThrottledError } from './sponsored-products-throttled-error';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftAdGroupMutationErrorSelector
 */
export interface SponsoredProductsDraftAdGroupMutationErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsEntityStateError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    entityStateError?: SponsoredProductsEntityStateError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsBiddingError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    biddingError?: SponsoredProductsBiddingError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsDuplicateValueError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    duplicateValueError?: SponsoredProductsDuplicateValueError;
    /**
     * 
     * @type {SponsoredProductsBillingError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    billingError?: SponsoredProductsBillingError;
    /**
     * 
     * @type {SponsoredProductsEntityQuotaError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    entityQuotaError?: SponsoredProductsEntityQuotaError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsDraftAdGroupMutationErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
}
