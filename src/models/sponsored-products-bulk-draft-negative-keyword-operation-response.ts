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
import { SponsoredProductsDraftNegativeKeywordFailureResponseItem } from './sponsored-products-draft-negative-keyword-failure-response-item';
import { SponsoredProductsDraftNegativeKeywordSuccessResponseItem } from './sponsored-products-draft-negative-keyword-success-response-item';
/**
 * 
 * @export
 * @interface SponsoredProductsBulkDraftNegativeKeywordOperationResponse
 */
export interface SponsoredProductsBulkDraftNegativeKeywordOperationResponse {
    /**
     * 
     * @type {Array<SponsoredProductsDraftNegativeKeywordSuccessResponseItem>}
     * @memberof SponsoredProductsBulkDraftNegativeKeywordOperationResponse
     */
    success?: Array<SponsoredProductsDraftNegativeKeywordSuccessResponseItem>;
    /**
     * 
     * @type {Array<SponsoredProductsDraftNegativeKeywordFailureResponseItem>}
     * @memberof SponsoredProductsBulkDraftNegativeKeywordOperationResponse
     */
    error?: Array<SponsoredProductsDraftNegativeKeywordFailureResponseItem>;
}