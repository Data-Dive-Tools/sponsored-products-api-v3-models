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
import { SponsoredProductsCampaignNegativeTargetsAccessError } from './sponsored-products-campaign-negative-targets-access-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in accessing campaign management entities
 * @export
 * @interface SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent
 */
export interface SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsCampaignNegativeTargetsAccessError>}
     * @memberof SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsCampaignNegativeTargetsAccessError>;
}
