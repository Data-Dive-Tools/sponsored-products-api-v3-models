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
import { SponsoredProductsDraftKeywordMutationError } from './sponsored-products-draft-keyword-mutation-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in mutating campaign management entities
 * @export
 * @interface SponsoredProductsDraftKeywordMutationExceptionResponseContent
 */
export interface SponsoredProductsDraftKeywordMutationExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftKeywordMutationExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftKeywordMutationExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftKeywordMutationError>}
     * @memberof SponsoredProductsDraftKeywordMutationExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftKeywordMutationError>;
}