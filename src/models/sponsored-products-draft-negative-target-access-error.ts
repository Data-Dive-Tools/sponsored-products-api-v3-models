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
import { SponsoredProductsDraftNegativeTargetAccessErrorSelector } from './sponsored-products-draft-negative-target-access-error-selector';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftNegativeTargetAccessError
 */
export interface SponsoredProductsDraftNegativeTargetAccessError {
    /**
     * The type of the error
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetAccessError
     */
    errorType: string;
    /**
     * 
     * @type {SponsoredProductsDraftNegativeTargetAccessErrorSelector}
     * @memberof SponsoredProductsDraftNegativeTargetAccessError
     */
    errorValue: SponsoredProductsDraftNegativeTargetAccessErrorSelector;
}