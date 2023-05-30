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
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent {
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent
     */
    campaignNegativeKeywordIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent
     */
    nextToken?: string;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsGlobalCampaignNegativeKeywordsRequestContent
     */
    includeExtendedDataFields?: boolean;
}