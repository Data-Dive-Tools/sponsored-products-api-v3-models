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
import { SponsoredProductsDraftAdGroup } from './sponsored-products-draft-ad-group';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftAdGroupSuccessResponseItem
 */
export interface SponsoredProductsDraftAdGroupSuccessResponseItem {
    /**
     * 
     * @type {SponsoredProductsDraftAdGroup}
     * @memberof SponsoredProductsDraftAdGroupSuccessResponseItem
     */
    adGroup?: SponsoredProductsDraftAdGroup;
    /**
     * the index of the draftAdGroup in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsDraftAdGroupSuccessResponseItem
     */
    index: number;
    /**
     * the adGroup ID
     * @type {string}
     * @memberof SponsoredProductsDraftAdGroupSuccessResponseItem
     */
    adGroupId?: string;
}
