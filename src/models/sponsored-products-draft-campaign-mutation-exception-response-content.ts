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
import { SponsoredProductsDraftCampaignMutationError } from './sponsored-products-draft-campaign-mutation-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in mutating draft management entities
 * @export
 * @interface SponsoredProductsDraftCampaignMutationExceptionResponseContent
 */
export interface SponsoredProductsDraftCampaignMutationExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftCampaignMutationExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftCampaignMutationExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftCampaignMutationError>}
     * @memberof SponsoredProductsDraftCampaignMutationExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftCampaignMutationError>;
}