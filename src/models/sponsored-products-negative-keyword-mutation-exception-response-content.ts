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
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
import { SponsoredProductsNegativeKeywordMutationError } from './sponsored-products-negative-keyword-mutation-error';
/**
 * Exception resulting in mutating campaign management entities
 * @export
 * @interface SponsoredProductsNegativeKeywordMutationExceptionResponseContent
 */
export interface SponsoredProductsNegativeKeywordMutationExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsNegativeKeywordMutationExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsNegativeKeywordMutationExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsNegativeKeywordMutationError>}
     * @memberof SponsoredProductsNegativeKeywordMutationExceptionResponseContent
     */
    errors?: Array<SponsoredProductsNegativeKeywordMutationError>;
}
