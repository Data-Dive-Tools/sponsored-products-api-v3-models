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
import { SponsoredProductsApplicableMarketplacesError } from './sponsored-products-applicable-marketplaces-error';
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
import { SponsoredProductsParentEntityError } from './sponsored-products-parent-entity-error';
import { SponsoredProductsRangeError } from './sponsored-products-range-error';
import { SponsoredProductsThrottledError } from './sponsored-products-throttled-error';
/**
 * 
 * @export
 * @interface SponsoredProductsAdGroupMutationErrorSelector
 */
export interface SponsoredProductsAdGroupMutationErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityStateError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    entityStateError?: SponsoredProductsEntityStateError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsBiddingError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    biddingError?: SponsoredProductsBiddingError;
    /**
     * 
     * @type {SponsoredProductsDuplicateValueError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    duplicateValueError?: SponsoredProductsDuplicateValueError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsParentEntityError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    parentEntityError?: SponsoredProductsParentEntityError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsApplicableMarketplacesError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    applicableMarketplacesError?: SponsoredProductsApplicableMarketplacesError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsBillingError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    billingError?: SponsoredProductsBillingError;
    /**
     * 
     * @type {SponsoredProductsEntityQuotaError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    entityQuotaError?: SponsoredProductsEntityQuotaError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsAdGroupMutationErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
}
