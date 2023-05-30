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
import { SponsoredProductsProductAdMutationError } from './sponsored-products-product-ad-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsProductAdFailureResponseItem
 */
export interface SponsoredProductsProductAdFailureResponseItem {
    /**
     * the index of the product ad in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsProductAdFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsProductAdMutationError>}
     * @memberof SponsoredProductsProductAdFailureResponseItem
     */
    errors?: Array<SponsoredProductsProductAdMutationError>;
}
