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
import { SponsoredProductsCreateOrUpdateEntityState } from './sponsored-products-create-or-update-entity-state';
import { SponsoredProductsCreateOrUpdateMarketplaceState } from './sponsored-products-create-or-update-marketplace-state';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateOrUpdateGlobalEntityState
 */
export interface SponsoredProductsCreateOrUpdateGlobalEntityState {
    /**
     * 
     * @type {Array<SponsoredProductsCreateOrUpdateMarketplaceState>}
     * @memberof SponsoredProductsCreateOrUpdateGlobalEntityState
     */
    marketplaceSettings?: Array<SponsoredProductsCreateOrUpdateMarketplaceState>;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateEntityState}
     * @memberof SponsoredProductsCreateOrUpdateGlobalEntityState
     */
    state: SponsoredProductsCreateOrUpdateEntityState;
}
