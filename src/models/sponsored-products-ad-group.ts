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
import { SponsoredProductsAdGroupExtendedData } from './sponsored-products-ad-group-extended-data';
import { SponsoredProductsEntityState } from './sponsored-products-entity-state';
/**
 * 
 * @export
 * @interface SponsoredProductsAdGroup
 */
export interface SponsoredProductsAdGroup {
    /**
     * The identifier of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsAdGroup
     */
    campaignId: string;
    /**
     * The name of the ad group.
     * @type {string}
     * @memberof SponsoredProductsAdGroup
     */
    name: string;
    /**
     * 
     * @type {SponsoredProductsEntityState}
     * @memberof SponsoredProductsAdGroup
     */
    state: SponsoredProductsEntityState;
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsAdGroup
     */
    adGroupId: string;
    /**
     * A bid value for use when no bid is specified for keywords in the ad group. For more information about bid constraints by marketplace, see [bid limits](https://advertising.amazon.com/API/docs/en-us/concepts/limits#bid-constraints-by-marketplace).
     * @type {number}
     * @memberof SponsoredProductsAdGroup
     */
    defaultBid: number;
    /**
     * 
     * @type {SponsoredProductsAdGroupExtendedData}
     * @memberof SponsoredProductsAdGroup
     */
    extendedData?: SponsoredProductsAdGroupExtendedData;
}
