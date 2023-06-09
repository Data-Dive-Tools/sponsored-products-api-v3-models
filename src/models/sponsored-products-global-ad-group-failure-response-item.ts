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
import { SponsoredProductsAdGroupMutationError } from './sponsored-products-ad-group-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalAdGroupFailureResponseItem
 */
export interface SponsoredProductsGlobalAdGroupFailureResponseItem {
    /**
     * the index of the adGroup in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsGlobalAdGroupFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsAdGroupMutationError>}
     * @memberof SponsoredProductsGlobalAdGroupFailureResponseItem
     */
    errors?: Array<SponsoredProductsAdGroupMutationError>;
}
