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
import { SponsoredProductsNegativeKeywordAccessError } from './sponsored-products-negative-keyword-access-error';
/**
 * Exception resulting in accessing campaign management entities
 * @export
 * @interface SponsoredProductsNegativeKeywordAccessExceptionResponseContent
 */
export interface SponsoredProductsNegativeKeywordAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsNegativeKeywordAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsNegativeKeywordAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsNegativeKeywordAccessError>}
     * @memberof SponsoredProductsNegativeKeywordAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsNegativeKeywordAccessError>;
}
