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
import { SponsoredProductsDraftAdGroupMutationError } from './sponsored-products-draft-ad-group-mutation-error';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftAdGroupFailureResponseItem
 */
export interface SponsoredProductsDraftAdGroupFailureResponseItem {
    /**
     * the index of the adGroup in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsDraftAdGroupFailureResponseItem
     */
    index: number;
    /**
     * A list of validation errors
     * @type {Array<SponsoredProductsDraftAdGroupMutationError>}
     * @memberof SponsoredProductsDraftAdGroupFailureResponseItem
     */
    errors?: Array<SponsoredProductsDraftAdGroupMutationError>;
}
