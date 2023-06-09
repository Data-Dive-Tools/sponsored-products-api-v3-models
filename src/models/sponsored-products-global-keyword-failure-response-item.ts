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
import { SponsoredProductsKeywordMutationError } from './sponsored-products-keyword-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalKeywordFailureResponseItem
 */
export interface SponsoredProductsGlobalKeywordFailureResponseItem {
    /**
     * the index of the keyword in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsGlobalKeywordFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsKeywordMutationError>}
     * @memberof SponsoredProductsGlobalKeywordFailureResponseItem
     */
    errors?: Array<SponsoredProductsKeywordMutationError>;
}
