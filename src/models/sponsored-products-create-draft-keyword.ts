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
import { SponsoredProductsCreateOrUpdateMatchType } from './sponsored-products-create-or-update-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateDraftKeyword
 */
export interface SponsoredProductsCreateDraftKeyword {
    /**
     * The unlocalized draft keyword text in the preferred locale of the advertiser.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    nativeLanguageKeyword?: string;
    /**
     * The locale preference of the advertiser. For example, if the advertiser’s preferred language is Simplified Chinese, set the locale to zh_CN. Supported locales include: Simplified Chinese (locale: zh_CN) for US, UK and CA. English (locale: en_GB) for DE, FR, IT and ES.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    nativeLanguageLocale?: string;
    /**
     * entity object identifier
     * @type {string}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateMatchType}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    matchType?: SponsoredProductsCreateOrUpdateMatchType;
    /**
     * Bid associated with this draft keyword. Applicable to biddable match types only. For more information about bid constraints by marketplace, see [bid limits](https://advertising.amazon.com/API/docs/en-us/concepts/limits#bid-constraints-by-marketplace).
     * @type {number}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    bid?: number;
    /**
     * entity object identifier
     * @type {string}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    adGroupId: string;
    /**
     * The draft keyword text.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftKeyword
     */
    keywordText: string;
}