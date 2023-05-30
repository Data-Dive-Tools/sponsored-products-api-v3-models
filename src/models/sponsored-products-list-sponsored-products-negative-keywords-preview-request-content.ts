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
import { SponsoredProductsKeywordTextFilter } from './sponsored-products-keyword-text-filter';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
import { SponsoredProductsObjectIdFilter } from './sponsored-products-object-id-filter';
import { SponsoredProductsReducedObjectIdFilter } from './sponsored-products-reduced-object-id-filter';
/**
 * 
 * @export
 * @interface SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
 */
export interface SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent {
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    campaignIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * 
     * @type {SponsoredProductsEntityStateFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    stateFilter?: SponsoredProductsEntityStateFilter;
    /**
     * 
     * @type {SponsoredProductsKeywordTextFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    negativeKeywordTextFilter?: SponsoredProductsKeywordTextFilter;
    /**
     * Number of records to include in the paginated response. Defaults to max page size for given API
     * @type {number}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    maxResults?: number;
    /**
     * token value allowing to navigate to the next response page
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    nextToken?: string;
    /**
     * 
     * @type {SponsoredProductsReducedObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    adGroupIdFilter?: SponsoredProductsReducedObjectIdFilter;
    /**
     * Whether to get entity with extended data fields such as creationDate, lastUpdateDate, servingStatus
     * @type {boolean}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    includeExtendedDataFields?: boolean;
    /**
     * Restricts results to negativeKeywords that match the specified locale.
     * @type {string}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    locale?: string;
    /**
     * 
     * @type {SponsoredProductsObjectIdFilter}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    negativeKeywordIdFilter?: SponsoredProductsObjectIdFilter;
    /**
     * Only the negativeKeyword with the match type that is in this list will be listed
     * @type {Array<SponsoredProductsNegativeMatchType>}
     * @memberof SponsoredProductsListSponsoredProductsNegativeKeywordsPreviewRequestContent
     */
    matchTypeFilter?: Array<SponsoredProductsNegativeMatchType>;
}
