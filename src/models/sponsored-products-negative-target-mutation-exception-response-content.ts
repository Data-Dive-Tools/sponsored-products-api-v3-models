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
import { SponsoredProductsNegativeTargetMutationError } from './sponsored-products-negative-target-mutation-error';
/**
 * Exception resulting in mutating campaign management entities
 * @export
 * @interface SponsoredProductsNegativeTargetMutationExceptionResponseContent
 */
export interface SponsoredProductsNegativeTargetMutationExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsNegativeTargetMutationExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsNegativeTargetMutationExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsNegativeTargetMutationError>}
     * @memberof SponsoredProductsNegativeTargetMutationExceptionResponseContent
     */
    errors?: Array<SponsoredProductsNegativeTargetMutationError>;
}
