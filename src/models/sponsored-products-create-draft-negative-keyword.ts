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
import { SponsoredProductsCreateOrUpdateNegativeMatchType } from './sponsored-products-create-or-update-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateDraftNegativeKeyword
 */
export interface SponsoredProductsCreateDraftNegativeKeyword {
    /**
     * The unlocalized keyword text in the preferred locale of the advertiser
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    nativeLanguageKeyword?: string;
    /**
     * The locale preference of the advertiser.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    nativeLanguageLocale?: string;
    /**
     * The identifer of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateNegativeMatchType}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    matchType: SponsoredProductsCreateOrUpdateNegativeMatchType;
    /**
     * The identifier of the ad group to which this keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    adGroupId: string;
    /**
     * The keyword text.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeKeyword
     */
    keywordText: string;
}
