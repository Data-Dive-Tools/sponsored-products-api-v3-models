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
import { SponsoredProductsEntityState } from './sponsored-products-entity-state';
import { SponsoredProductsNegativeKeywordExtendedData } from './sponsored-products-negative-keyword-extended-data';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsNegativeKeyword
 */
export interface SponsoredProductsNegativeKeyword {
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    keywordId: string;
    /**
     * The unlocalized keyword text in the preferred locale of the advertiser
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    nativeLanguageKeyword?: string;
    /**
     * The locale preference of the advertiser.
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    nativeLanguageLocale?: string;
    /**
     * The identifier of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsNegativeMatchType}
     * @memberof SponsoredProductsNegativeKeyword
     */
    matchType: SponsoredProductsNegativeMatchType;
    /**
     * 
     * @type {SponsoredProductsEntityState}
     * @memberof SponsoredProductsNegativeKeyword
     */
    state: SponsoredProductsEntityState;
    /**
     * The identifier of the ad group to which this keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    adGroupId: string;
    /**
     * The keyword text.
     * @type {string}
     * @memberof SponsoredProductsNegativeKeyword
     */
    keywordText: string;
    /**
     * 
     * @type {SponsoredProductsNegativeKeywordExtendedData}
     * @memberof SponsoredProductsNegativeKeyword
     */
    extendedData?: SponsoredProductsNegativeKeywordExtendedData;
}