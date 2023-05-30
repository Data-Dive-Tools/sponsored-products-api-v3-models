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
import { SponsoredProductsNegativeKeyword } from './sponsored-products-negative-keyword';
/**
 * 
 * @export
 * @interface SponsoredProductsNegativeKeywordSuccessResponseItem
 */
export interface SponsoredProductsNegativeKeywordSuccessResponseItem {
    /**
     * the index of the negativeKeyword in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsNegativeKeywordSuccessResponseItem
     */
    index: number;
    /**
     * 
     * @type {SponsoredProductsNegativeKeyword}
     * @memberof SponsoredProductsNegativeKeywordSuccessResponseItem
     */
    negativeKeyword?: SponsoredProductsNegativeKeyword;
    /**
     * the negativeKeyword ID
     * @type {string}
     * @memberof SponsoredProductsNegativeKeywordSuccessResponseItem
     */
    negativeKeywordId?: string;
}