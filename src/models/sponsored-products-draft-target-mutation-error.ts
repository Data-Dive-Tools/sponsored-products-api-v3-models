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
import { SponsoredProductsDraftTargetMutationErrorSelector } from './sponsored-products-draft-target-mutation-error-selector';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftTargetMutationError
 */
export interface SponsoredProductsDraftTargetMutationError {
    /**
     * The type of the error
     * @type {string}
     * @memberof SponsoredProductsDraftTargetMutationError
     */
    errorType: string;
    /**
     * 
     * @type {SponsoredProductsDraftTargetMutationErrorSelector}
     * @memberof SponsoredProductsDraftTargetMutationError
     */
    errorValue: SponsoredProductsDraftTargetMutationErrorSelector;
}
