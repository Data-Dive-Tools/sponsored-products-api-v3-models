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
import { SponsoredProductsGlobalProductAServingStatusReason } from './sponsored-products-global-product-aserving-status-reason';
import { SponsoredProductsMarketplaceProductAdServingStatus } from './sponsored-products-marketplace-product-ad-serving-status';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalProductAdServingStatus
 */
export interface SponsoredProductsGlobalProductAdServingStatus {
    /**
     * Serving status details of Product Ad
     * @type {Array<SponsoredProductsGlobalProductAServingStatusReason>}
     * @memberof SponsoredProductsGlobalProductAdServingStatus
     */
    statusReasons?: Array<SponsoredProductsGlobalProductAServingStatusReason>;
    /**
     * The marketplace serving statuses.
     * @type {Array<SponsoredProductsMarketplaceProductAdServingStatus>}
     * @memberof SponsoredProductsGlobalProductAdServingStatus
     */
    marketplaceAdServingStatus?: Array<SponsoredProductsMarketplaceProductAdServingStatus>;
    /**
     * 
     * @type {SponsoredProductsGlobalEntityServingStatus}
     * @memberof SponsoredProductsGlobalProductAdServingStatus
     */
    adServingStatus?: SponsoredProductsGlobalEntityServingStatus;
}