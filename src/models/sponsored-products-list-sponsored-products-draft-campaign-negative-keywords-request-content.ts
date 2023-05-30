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
import { SponsoredProductsKeywordTextFilter } from './sponsored-products-keyword-text-filter';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
import { SponsoredProductsReducedObjectIdFilter } from './sponsored-products-reduced-object-id-filter';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    campaignNegativeKeywordIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    nextToken?: string;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * 
     * @type {SponsoredProductsKeywordTextFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    campaignNegativeKeywordTextFilter?: SponsoredProductsKeywordTextFilter;
    /**
     * 
     * @type {SponsoredProductsNegativeMatchType}
     * @memberof SponsoredProductsListSponsoredProductsDraftCampaignNegativeKeywordsRequestContent
     */
    matchTypeFilter?: SponsoredProductsNegativeMatchType;
}
