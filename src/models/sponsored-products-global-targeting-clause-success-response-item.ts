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
import { SponsoredProductsGlobalTargetingClause } from './sponsored-products-global-targeting-clause';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalTargetingClauseSuccessResponseItem
 */
export interface SponsoredProductsGlobalTargetingClauseSuccessResponseItem {
    /**
     * 
     * @type {SponsoredProductsGlobalTargetingClause}
     * @memberof SponsoredProductsGlobalTargetingClauseSuccessResponseItem
     */
    targetingClause?: SponsoredProductsGlobalTargetingClause;
    /**
     * the targetingClause ID
     * @type {string}
     * @memberof SponsoredProductsGlobalTargetingClauseSuccessResponseItem
     */
    targetId?: string;
    /**
     * the index of the targetingClause in the array from the request body
     * @type {number}
     * @memberof SponsoredProductsGlobalTargetingClauseSuccessResponseItem
     */
    index: number;
}
