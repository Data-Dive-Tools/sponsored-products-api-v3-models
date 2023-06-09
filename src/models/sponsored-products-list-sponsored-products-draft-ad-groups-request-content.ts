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
import { SponsoredProductsNameFilter } from './sponsored-products-name-filter';
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
import { SponsoredProductsReducedObjectIdFilter } from './sponsored-products-reduced-object-id-filter';
import { SponsoredProductsTargetingType } from './sponsored-products-targeting-type';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    nextToken?: string;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    adGroupIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * 
     * @type {SponsoredProductsNameFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    nameFilter?: SponsoredProductsNameFilter;
    /**
     * 
     * @type {SponsoredProductsTargetingType}
     * @memberof SponsoredProductsListSponsoredProductsDraftAdGroupsRequestContent
     */
    campaignTargetingTypeFilter?: SponsoredProductsTargetingType;
}
