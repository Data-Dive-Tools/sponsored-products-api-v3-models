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
import { SponsoredProductsGlobalEntityServingStatus } from './sponsored-products-global-entity-serving-status';
import { SponsoredProductsGlobalKeywordServingStatusReason } from './sponsored-products-global-keyword-serving-status-reason';
import { SponsoredProductsMarketplaceTargetingClauseServingStatus } from './sponsored-products-marketplace-targeting-clause-serving-status';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalTargetingClauseServingStatus
 */
export interface SponsoredProductsGlobalTargetingClauseServingStatus {
    /**
     * Serving status details of adgroup
     * @type {Array<SponsoredProductsGlobalKeywordServingStatusReason>}
     * @memberof SponsoredProductsGlobalTargetingClauseServingStatus
     */
    statusReasons?: Array<SponsoredProductsGlobalKeywordServingStatusReason>;
    /**
     * 
     * @type {SponsoredProductsGlobalEntityServingStatus}
     * @memberof SponsoredProductsGlobalTargetingClauseServingStatus
     */
    targetingClauseServingStatus?: SponsoredProductsGlobalEntityServingStatus;
    /**
     * The marketplace serving statuses.
     * @type {Array<SponsoredProductsMarketplaceTargetingClauseServingStatus>}
     * @memberof SponsoredProductsGlobalTargetingClauseServingStatus
     */
    marketplaceTargetingClauseServingStatus?: Array<SponsoredProductsMarketplaceTargetingClauseServingStatus>;
}