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
import { SponsoredProductsBudgetError } from './sponsored-products-budget-error';
import { SponsoredProductsDateError } from './sponsored-products-date-error';
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
 * @interface SponsoredProductsDraftCampaignPromotionErrorSelector
 */
export interface SponsoredProductsDraftCampaignPromotionErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityStateError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    entityStateError?: SponsoredProductsEntityStateError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsDateError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    dateError?: SponsoredProductsDateError;
    /**
     * 
     * @type {SponsoredProductsBiddingError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    biddingError?: SponsoredProductsBiddingError;
    /**
     * 
     * @type {SponsoredProductsDuplicateValueError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    duplicateValueError?: SponsoredProductsDuplicateValueError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsBudgetError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    budgetError?: SponsoredProductsBudgetError;
    /**
     * 
     * @type {SponsoredProductsBillingError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    billingError?: SponsoredProductsBillingError;
    /**
     * 
     * @type {SponsoredProductsEntityQuotaError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    entityQuotaError?: SponsoredProductsEntityQuotaError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsDraftCampaignPromotionErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
}
