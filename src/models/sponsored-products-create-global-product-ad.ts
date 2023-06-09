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
import { SponsoredProductsCreateOrUpdateGlobalEntityState } from './sponsored-products-create-or-update-global-entity-state';
import { SponsoredProductsGlobalProductIdentifiers } from './sponsored-products-global-product-identifiers';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateGlobalProductAd
 */
export interface SponsoredProductsCreateGlobalProductAd {
    /**
     * The campaign identifier.
     * @type {string}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    campaignId: string;
    /**
     * The custom text to use for creating a custom text ad for the associated ASIN. Defined for only KDP Authors and Book Vendors
     * @type {string}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    customText?: string;
    /**
     * Name for the product Ad
     * @type {string}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    name?: string;
    /**
     * 
     * @type {SponsoredProductsGlobalProductIdentifiers}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    asin?: SponsoredProductsGlobalProductIdentifiers;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateGlobalEntityState}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    state: SponsoredProductsCreateOrUpdateGlobalEntityState;
    /**
     * 
     * @type {SponsoredProductsGlobalProductIdentifiers}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    sku?: SponsoredProductsGlobalProductIdentifiers;
    /**
     * The ad group identifier.
     * @type {string}
     * @memberof SponsoredProductsCreateGlobalProductAd
     */
    adGroupId: string;
}
