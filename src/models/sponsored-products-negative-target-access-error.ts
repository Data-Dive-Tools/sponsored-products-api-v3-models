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
import { SponsoredProductsNegativeTargetAccessErrorSelector } from './sponsored-products-negative-target-access-error-selector';
/**
 * 
 * @export
 * @interface SponsoredProductsNegativeTargetAccessError
 */
export interface SponsoredProductsNegativeTargetAccessError {
    /**
     * The type of the error
     * @type {string}
     * @memberof SponsoredProductsNegativeTargetAccessError
     */
    errorType: string;
    /**
     * 
     * @type {SponsoredProductsNegativeTargetAccessErrorSelector}
     * @memberof SponsoredProductsNegativeTargetAccessError
     */
    errorValue: SponsoredProductsNegativeTargetAccessErrorSelector;
}