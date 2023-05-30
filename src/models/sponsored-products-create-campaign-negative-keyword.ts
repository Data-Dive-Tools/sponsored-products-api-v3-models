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
import { SponsoredProductsCreateOrUpdateEntityState } from './sponsored-products-create-or-update-entity-state';
import { SponsoredProductsCreateOrUpdateNegativeMatchType } from './sponsored-products-create-or-update-negative-match-type';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateCampaignNegativeKeyword
 */
export interface SponsoredProductsCreateCampaignNegativeKeyword {
    /**
     * The identifier of the campaign to which the keyword is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateCampaignNegativeKeyword
     */
    campaignId: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateNegativeMatchType}
     * @memberof SponsoredProductsCreateCampaignNegativeKeyword
     */
    matchType: SponsoredProductsCreateOrUpdateNegativeMatchType;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateEntityState}
     * @memberof SponsoredProductsCreateCampaignNegativeKeyword
     */
    state: SponsoredProductsCreateOrUpdateEntityState;
    /**
     * The keyword text.
     * @type {string}
     * @memberof SponsoredProductsCreateCampaignNegativeKeyword
     */
    keywordText: string;
}
