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
import { SponsoredProductsDraftCampaignNegativeKeywordExtendedData } from './sponsored-products-draft-campaign-negative-keyword-extended-data';
import { SponsoredProductsNegativeMatchType } from './sponsored-products-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignNegativeKeyword
 */
export interface SponsoredProductsDraftCampaignNegativeKeyword {
    /**
     * The identifier of the keyword.
     * @type {string}
     * @memberof SponsoredProductsDraftCampaignNegativeKeyword
     */
    keywordId: string;
    /**
     * The identifier of the draft to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsDraftCampaignNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsNegativeMatchType}
     * @memberof SponsoredProductsDraftCampaignNegativeKeyword
     */
    matchType: SponsoredProductsNegativeMatchType;
    /**
     * The keyword text.
     * @type {string}
     * @memberof SponsoredProductsDraftCampaignNegativeKeyword
     */
    keywordText: string;
    /**
     * 
     * @type {SponsoredProductsDraftCampaignNegativeKeywordExtendedData}
     * @memberof SponsoredProductsDraftCampaignNegativeKeyword
     */
    extendedData?: SponsoredProductsDraftCampaignNegativeKeywordExtendedData;
}