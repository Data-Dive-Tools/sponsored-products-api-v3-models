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
import { SponsoredProductsEntityStateFilter } from './sponsored-products-entity-state-filter';
import { SponsoredProductsNameFilter } from './sponsored-products-name-filter';
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
import { SponsoredProductsReducedObjectIdFilter } from './sponsored-products-reduced-object-id-filter';
import { SponsoredProductsTargetingType } from './sponsored-products-targeting-type';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsAdGroupsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsAdGroupsRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsEntityStateFilter}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    stateFilter?: SponsoredProductsEntityStateFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    nextToken?: string;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    adGroupIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * 
     * @type {SponsoredProductsNameFilter}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    nameFilter?: SponsoredProductsNameFilter;
    /**
     * 
     * @type {SponsoredProductsTargetingType}
     * @memberof SponsoredProductsListSponsoredProductsAdGroupsRequestContent
     */
    campaignTargetingTypeFilter?: SponsoredProductsTargetingType;
}