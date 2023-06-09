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
import { SponsoredProductsDraftCampaignAccessError } from './sponsored-products-draft-campaign-access-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in accessing draft management entities
 * @export
 * @interface SponsoredProductsDraftCampaignAccessExceptionResponseContent
 */
export interface SponsoredProductsDraftCampaignAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftCampaignAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftCampaignAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftCampaignAccessError>}
     * @memberof SponsoredProductsDraftCampaignAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftCampaignAccessError>;
}
