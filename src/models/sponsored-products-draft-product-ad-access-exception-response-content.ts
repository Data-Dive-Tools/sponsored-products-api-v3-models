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
import { SponsoredProductsDraftProductAdAccessError } from './sponsored-products-draft-product-ad-access-error';
import { SponsoredProductsInvalidArgumentErrorCode } from './sponsored-products-invalid-argument-error-code';
/**
 * Exception resulting in accessing campaign management entities
 * @export
 * @interface SponsoredProductsDraftProductAdAccessExceptionResponseContent
 */
export interface SponsoredProductsDraftProductAdAccessExceptionResponseContent {
    /**
     * 
     * @type {SponsoredProductsInvalidArgumentErrorCode}
     * @memberof SponsoredProductsDraftProductAdAccessExceptionResponseContent
     */
    code: SponsoredProductsInvalidArgumentErrorCode;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsDraftProductAdAccessExceptionResponseContent
     */
    message: string;
    /**
     * 
     * @type {Array<SponsoredProductsDraftProductAdAccessError>}
     * @memberof SponsoredProductsDraftProductAdAccessExceptionResponseContent
     */
    errors?: Array<SponsoredProductsDraftProductAdAccessError>;
}
