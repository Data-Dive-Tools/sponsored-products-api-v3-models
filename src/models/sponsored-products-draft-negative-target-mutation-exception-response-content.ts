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
import { SponsoredProductsDraftNegativeTargetMutationError } from './sponsored-products-draft-negative-target-mutation-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in mutating campaign management entities
 * @export
 * @interface SponsoredProductsDraftNegativeTargetMutationExceptionResponseContent
 */
export interface SponsoredProductsDraftNegativeTargetMutationExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftNegativeTargetMutationExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetMutationExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftNegativeTargetMutationError>}
     * @memberof SponsoredProductsDraftNegativeTargetMutationExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftNegativeTargetMutationError>;
}