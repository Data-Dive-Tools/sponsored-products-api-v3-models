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
import { KeywordBidInfo } from './keyword-bid-info';
/**
 * 
 * @export
 * @interface RecKeywordTarget
 */
export interface RecKeywordTarget {
    /**
     * The account-level ad-attributed impression share for the search-term/keyword. Provides percentage share of all ad impressions the advertiser has for the keyword in the last 30 days. This metric helps advertisers identify potential opportunities based on their share on relevant keywords. This information is only available for keywords the advertiser targeted with ad impressions.
     * @type {number}
     * @memberof RecKeywordTarget
     */
    searchTermImpressionShare?: number;
    /**
     * The translation of keyword if a locale is passed in
     * @type {string}
     * @memberof RecKeywordTarget
     */
    translation?: string;
    /**
     * A list of keyword bid info
     * @type {Array<KeywordBidInfo>}
     * @memberof RecKeywordTarget
     */
    bidInfo?: Array<KeywordBidInfo>;
    /**
     * The account-level ad-attributed impression rank for the search-term/keyword. Provides [1:N] place the advertiser ranks among all advertisers for the keyword by ad impressions in a marketplace in the last 30 days. It tells an advertiser how many advertisers had higher share of ad impressions. This information is only available for keywords the advertiser targeted with ad impressions.
     * @type {number}
     * @memberof RecKeywordTarget
     */
    searchTermImpressionRank?: number;
    /**
     * The keyword value
     * @type {string}
     * @memberof RecKeywordTarget
     */
    keyword?: string;
    /**
     * Flag that tells if keyword was selected by the user or was recommended by KRS
     * @type {boolean}
     * @memberof RecKeywordTarget
     */
    userSelectedKeyword?: boolean;
    /**
     * The recommended keyword target id
     * @type {string}
     * @memberof RecKeywordTarget
     */
    recId?: string;
}
