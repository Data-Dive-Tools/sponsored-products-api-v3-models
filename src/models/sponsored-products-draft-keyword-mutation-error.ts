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
import { SponsoredProductsDraftKeywordMutationErrorSelector } from './sponsored-products-draft-keyword-mutation-error-selector';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftKeywordMutationError
 */
export interface SponsoredProductsDraftKeywordMutationError {
    /**
     * The type of the error
     * @type {string}
     * @memberof SponsoredProductsDraftKeywordMutationError
     */
    errorType: string;
    /**
     * 
     * @type {SponsoredProductsDraftKeywordMutationErrorSelector}
     * @memberof SponsoredProductsDraftKeywordMutationError
     */
    errorValue: SponsoredProductsDraftKeywordMutationErrorSelector;
}