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
import { SponsoredProductsEntityState } from './sponsored-products-entity-state';
import { SponsoredProductsMarketplace } from './sponsored-products-marketplace';
/**
 * 
 * @export
 * @interface SponsoredProductsMarketplaceState
 */
export interface SponsoredProductsMarketplaceState {
    /**
     * 
     * @type {SponsoredProductsMarketplace}
     * @memberof SponsoredProductsMarketplaceState
     */
    marketplace: SponsoredProductsMarketplace;
    /**
     * 
     * @type {SponsoredProductsEntityState}
     * @memberof SponsoredProductsMarketplaceState
     */
    state: SponsoredProductsEntityState;
}
