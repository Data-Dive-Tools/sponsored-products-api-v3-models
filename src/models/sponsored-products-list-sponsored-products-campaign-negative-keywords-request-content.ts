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
 * @interface SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    campaignNegativeKeywordIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    nextToken?: string;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * 
     * @type {SponsoredProductsKeywordTextFilter}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    campaignNegativeKeywordTextFilter?: SponsoredProductsKeywordTextFilter;
    /**
     * Restricts results to resources with the selected matchType
     * @type {Array<SponsoredProductsNegativeMatchType>}
     * @memberof SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent
     */
    matchTypeFilter?: Array<SponsoredProductsNegativeMatchType>;
}
