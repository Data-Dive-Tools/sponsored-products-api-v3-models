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
import { SponsoredProductsTargetAccessErrorSelector } from './sponsored-products-target-access-error-selector';
/**
 * 
 * @export
 * @interface SponsoredProductsTargetAccessError
 */
export interface SponsoredProductsTargetAccessError {
    /**
     * The type of the error
     * @type {string}
     * @memberof SponsoredProductsTargetAccessError
     */
    errorType: string;
    /**
     * 
     * @type {SponsoredProductsTargetAccessErrorSelector}
     * @memberof SponsoredProductsTargetAccessError
     */
    errorValue: SponsoredProductsTargetAccessErrorSelector;
}