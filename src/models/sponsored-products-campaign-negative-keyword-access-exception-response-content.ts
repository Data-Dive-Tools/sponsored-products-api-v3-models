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
import { SponsoredProductsCampaignNegativeKeywordAccessError } from './sponsored-products-campaign-negative-keyword-access-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in accessing campaign management entities
 * @export
 * @interface SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent
 */
export interface SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsCampaignNegativeKeywordAccessError>}
     * @memberof SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsCampaignNegativeKeywordAccessError>;
}
