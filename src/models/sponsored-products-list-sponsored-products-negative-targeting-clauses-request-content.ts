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
import { SponsoredProductsAsinFilter } from './sponsored-products-asin-filter';
import { SponsoredProductsEntityStateFilter } from './sponsored-products-entity-state-filter';
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
import { SponsoredProductsReducedObjectIdFilter } from './sponsored-products-reduced-object-id-filter';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
 */
export interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent {
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    negativeTargetIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsEntityStateFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    stateFilter?: SponsoredProductsEntityStateFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    nextToken?: string;
    /**
     * 
     * @type {SponsoredProductsAsinFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    asinFilter?: SponsoredProductsAsinFilter;
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    adGroupIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent
     */
    includeExtendedDataFields?: boolean;
}