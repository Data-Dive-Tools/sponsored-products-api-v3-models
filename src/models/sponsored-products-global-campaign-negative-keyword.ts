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
import { SponsoredProductsGlobalCampaignNegativeKeywordExtendedData } from './sponsored-products-global-campaign-negative-keyword-extended-data';
import { SponsoredProductsGlobalEntityState } from './sponsored-products-global-entity-state';
import { SponsoredProductsGlobalNegativeKeywordText } from './sponsored-products-global-negative-keyword-text';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalCampaignNegativeKeyword
 */
export interface SponsoredProductsGlobalCampaignNegativeKeyword {
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    keywordId: string;
    /**
     * The identifier of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsNegativeMatchType}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    matchType: SponsoredProductsNegativeMatchType;
    /**
     * Name for the keyword
     * @type {string}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    name?: string;
    /**
     * 
     * @type {SponsoredProductsGlobalEntityState}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    state: SponsoredProductsGlobalEntityState;
    /**
     * 
     * @type {SponsoredProductsGlobalNegativeKeywordText}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    keywordText: SponsoredProductsGlobalNegativeKeywordText;
    /**
     * 
     * @type {SponsoredProductsGlobalCampaignNegativeKeywordExtendedData}
     * @memberof SponsoredProductsGlobalCampaignNegativeKeyword
     */
    extendedData?: SponsoredProductsGlobalCampaignNegativeKeywordExtendedData;
}