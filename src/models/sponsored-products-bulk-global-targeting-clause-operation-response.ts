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
import { SponsoredProductsGlobalTargetingClauseFailureResponseItem } from './sponsored-products-global-targeting-clause-failure-response-item';
import { SponsoredProductsGlobalTargetingClauseSuccessResponseItem } from './sponsored-products-global-targeting-clause-success-response-item';
/**
 * 
 * @export
 * @interface SponsoredProductsBulkGlobalTargetingClauseOperationResponse
 */
export interface SponsoredProductsBulkGlobalTargetingClauseOperationResponse {
    /**
     * 
     * @type {Array<SponsoredProductsGlobalTargetingClauseSuccessResponseItem>}
     * @memberof SponsoredProductsBulkGlobalTargetingClauseOperationResponse
     */
    success?: Array<SponsoredProductsGlobalTargetingClauseSuccessResponseItem>;
    /**
     * 
     * @type {Array<SponsoredProductsGlobalTargetingClauseFailureResponseItem>}
     * @memberof SponsoredProductsBulkGlobalTargetingClauseOperationResponse
     */
    error?: Array<SponsoredProductsGlobalTargetingClauseFailureResponseItem>;
}
