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
/**
 * 
 * @export
 * @interface SponsoredProductsUpdateKeyword
 */
export interface SponsoredProductsUpdateKeyword {
    /**
     * entity object identifier
     * @type {string}
     * @memberof SponsoredProductsUpdateKeyword
     */
    keywordId: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateEntityState}
     * @memberof SponsoredProductsUpdateKeyword
     */
    state?: SponsoredProductsCreateOrUpdateEntityState;
    /**
     * Bid associated with this keyword. Applicable to biddable match types only. For more information about bid constraints by marketplace, see [bid limits](https://advertising.amazon.com/API/docs/en-us/concepts/limits#bid-constraints-by-marketplace).
     * @type {number}
     * @memberof SponsoredProductsUpdateKeyword
     */
    bid?: number | null;
}