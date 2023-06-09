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
import { SponsoredProductsDateError } from './sponsored-products-date-error';
import { SponsoredProductsEntityNotFoundError } from './sponsored-products-entity-not-found-error';
import { SponsoredProductsInternalServerError } from './sponsored-products-internal-server-error';
import { SponsoredProductsInvalidInputError } from './sponsored-products-invalid-input-error';
import { SponsoredProductsMalformedValueError } from './sponsored-products-malformed-value-error';
import { SponsoredProductsMissingValueError } from './sponsored-products-missing-value-error';
import { SponsoredProductsOtherError } from './sponsored-products-other-error';
import { SponsoredProductsRangeError } from './sponsored-products-range-error';
import { SponsoredProductsThrottledError } from './sponsored-products-throttled-error';
/**
 * 
 * @export
 * @interface SponsoredProductsCampaignAccessErrorSelector
 */
export interface SponsoredProductsCampaignAccessErrorSelector {
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    entityNotFoundError?: SponsoredProductsEntityNotFoundError;
    /**
     * 
     * @type {SponsoredProductsMissingValueError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    missingValueError?: SponsoredProductsMissingValueError;
    /**
     * 
     * @type {SponsoredProductsDateError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    dateError?: SponsoredProductsDateError;
    /**
     * 
     * @type {SponsoredProductsMalformedValueError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    malformedValueError?: SponsoredProductsMalformedValueError;
    /**
     * 
     * @type {SponsoredProductsInternalServerError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    internalServerError?: SponsoredProductsInternalServerError;
    /**
     * 
     * @type {SponsoredProductsRangeError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    rangeError?: SponsoredProductsRangeError;
    /**
     * 
     * @type {SponsoredProductsOtherError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    otherError?: SponsoredProductsOtherError;
    /**
     * 
     * @type {SponsoredProductsThrottledError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    throttledError?: SponsoredProductsThrottledError;
    /**
     * 
     * @type {SponsoredProductsInvalidInputError}
     * @memberof SponsoredProductsCampaignAccessErrorSelector
     */
    invalidInputError?: SponsoredProductsInvalidInputError;
}
