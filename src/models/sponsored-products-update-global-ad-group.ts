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
import { SponsoredProductsGlobalBid } from './sponsored-products-global-bid';
/**
 * 
 * @export
 * @interface SponsoredProductsUpdateGlobalAdGroup
 */
export interface SponsoredProductsUpdateGlobalAdGroup {
    /**
     * 
     * @type {Array<string>}
     * @memberof SponsoredProductsUpdateGlobalAdGroup
     */
    applicableMarketplaces?: Array<string>;
    /**
     * The name of the ad group.
     * @type {string}
     * @memberof SponsoredProductsUpdateGlobalAdGroup
     */
    name?: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateGlobalEntityState}
     * @memberof SponsoredProductsUpdateGlobalAdGroup
     */
    state?: SponsoredProductsCreateOrUpdateGlobalEntityState;
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsUpdateGlobalAdGroup
     */
    adGroupId: string;
    /**
     * 
     * @type {SponsoredProductsGlobalBid}
     * @memberof SponsoredProductsUpdateGlobalAdGroup
     */
    defaultBid?: SponsoredProductsGlobalBid;
}
