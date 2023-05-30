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
import { SponsoredProductsDraftNegativeTargetAccessError } from './sponsored-products-draft-negative-target-access-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in accessing campaign management entities
 * @export
 * @interface SponsoredProductsDraftNegativeTargetAccessExceptionResponseContent
 */
export interface SponsoredProductsDraftNegativeTargetAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftNegativeTargetAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftNegativeTargetAccessError>}
     * @memberof SponsoredProductsDraftNegativeTargetAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftNegativeTargetAccessError>;
}