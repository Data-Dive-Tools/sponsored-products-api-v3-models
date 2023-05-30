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
import { SponsoredProductsEntityNotFoundError } from './sponsored-products-entity-not-found-error';
import { SponsoredProductsInternalServerError } from './sponsored-products-internal-server-error';
import { SponsoredProductsMalformedValueError } from './sponsored-products-malformed-value-error';
import { SponsoredProductsMissingValueError } from './sponsored-products-missing-value-error';
import { SponsoredProductsOtherError } from './sponsored-products-other-error';
import { SponsoredProductsRangeError } from './sponsored-products-range-error';
import { SponsoredProductsThrottledError } from './sponsored-products-throttled-error';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
 */
export interface SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsDraftCampaignNegativeKeywordAccessErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
}