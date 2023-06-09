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
 * @interface SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
 */
export interface SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsKeywordTextFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    negativeKeywordTextFilter?: SponsoredProductsKeywordTextFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    nextToken?: string;
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    adGroupIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * The locale preference of the advertiser.
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    locale?: string;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    negativeKeywordIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Restricts results to resources with the selected matchType
     * @type {Array<SponsoredProductsNegativeMatchType>}
     * @memberof SponsoredProductsListSponsoredProductsDraftNegativeKeywordsRequestContent
     */
    matchTypeFilter?: Array<SponsoredProductsNegativeMatchType>;
}
