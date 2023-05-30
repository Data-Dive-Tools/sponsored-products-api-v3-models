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
 * @interface SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
 */
export interface SponsoredProductsCampaignNegativeKeywordMutationErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsEntityStateError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    entityStateError?: SponsoredProductsEntityStateError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsDuplicateValueError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    duplicateValueError?: SponsoredProductsDuplicateValueError;
    /**
     * 
     * @type {SponsoredProductsBillingError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    billingError?: SponsoredProductsBillingError;
    /**
     * 
     * @type {SponsoredProductsEntityQuotaError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    entityQuotaError?: SponsoredProductsEntityQuotaError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsParentEntityError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    parentEntityError?: SponsoredProductsParentEntityError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsCampaignNegativeKeywordMutationErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
}