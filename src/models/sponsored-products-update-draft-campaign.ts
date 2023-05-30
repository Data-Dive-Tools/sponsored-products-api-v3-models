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
import { SponsoredProductsCreateOrUpdateDraftCampaignBudget } from './sponsored-products-create-or-update-draft-campaign-budget';
import { SponsoredProductsCreateOrUpdateDraftCampaignDynamicBidding } from './sponsored-products-create-or-update-draft-campaign-dynamic-bidding';
import { SponsoredProductsTags } from './sponsored-products-tags';
import { SponsoredProductsTargetingType } from './sponsored-products-targeting-type';
/**
 * 
 * @export
 * @interface SponsoredProductsUpdateDraftCampaign
 */
export interface SponsoredProductsUpdateDraftCampaign {
    /**
     * The identifier of an existing portfolio to which the draft is associated.
     * @type {string}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    portfolioId?: string | null;
    /**
     * The format of the date is YYYY-MM-DD.
     * @type {string}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    endDate?: string | null;
    /**
     * entity object identifier
     * @type {string}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    campaignId: string;
    /**
     * The name of the draft.
     * @type {string}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    name?: string;
    /**
     * 
     * @type {SponsoredProductsTargetingType}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    targetingType?: SponsoredProductsTargetingType;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateDraftCampaignDynamicBidding}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    dynamicBidding?: SponsoredProductsCreateOrUpdateDraftCampaignDynamicBidding;
    /**
     * The format of the date is YYYY-MM-DD.
     * @type {string}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    startDate?: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateDraftCampaignBudget}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    budget?: SponsoredProductsCreateOrUpdateDraftCampaignBudget;
    /**
     * 
     * @type {SponsoredProductsTags}
     * @memberof SponsoredProductsUpdateDraftCampaign
     */
    tags?: SponsoredProductsTags;
}
