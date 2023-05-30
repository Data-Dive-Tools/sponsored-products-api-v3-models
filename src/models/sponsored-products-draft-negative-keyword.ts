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
import { SponsoredProductsDraftNegativeKeywordExtendedData } from './sponsored-products-draft-negative-keyword-extended-data';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftNegativeKeyword
 */
export interface SponsoredProductsDraftNegativeKeyword {
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    keywordId: string;
    /**
     * The unlocalized keyword text in the preferred locale of the advertiser
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    nativeLanguageKeyword?: string;
    /**
     * The locale preference of the advertiser.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    nativeLanguageLocale?: string;
    /**
     * The identifier of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsNegativeMatchType}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    matchType: SponsoredProductsNegativeMatchType;
    /**
     * The identifier of the ad group to which this keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    adGroupId: string;
    /**
     * The keyword text.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    keywordText: string;
    /**
     * 
     * @type {SponsoredProductsDraftNegativeKeywordExtendedData}
     * @memberof SponsoredProductsDraftNegativeKeyword
     */
    extendedData?: SponsoredProductsDraftNegativeKeywordExtendedData;
}