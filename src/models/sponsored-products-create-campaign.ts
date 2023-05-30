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
import { SponsoredProductsCreateOrUpdateBudget } from './sponsored-products-create-or-update-budget';
import { SponsoredProductsCreateOrUpdateDynamicBidding } from './sponsored-products-create-or-update-dynamic-bidding';
import { SponsoredProductsCreateOrUpdateEntityState } from './sponsored-products-create-or-update-entity-state';
import { SponsoredProductsTags } from './sponsored-products-tags';
import { SponsoredProductsTargetingType } from './sponsored-products-targeting-type';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateCampaign
 */
export interface SponsoredProductsCreateCampaign {
    /**
     * The identifier of an existing portfolio to which the campaign is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateCampaign
     */
    portfolioId?: string;
    /**
     * The format of the date is YYYY-MM-DD.
     * @type {string}
     * @memberof SponsoredProductsCreateCampaign
     */
    endDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsCreateCampaign
     */
    name: string;
    /**
     * 
     * @type {SponsoredProductsTargetingType}
     * @memberof SponsoredProductsCreateCampaign
     */
    targetingType: SponsoredProductsTargetingType;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateEntityState}
     * @memberof SponsoredProductsCreateCampaign
     */
    state: SponsoredProductsCreateOrUpdateEntityState;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateDynamicBidding}
     * @memberof SponsoredProductsCreateCampaign
     */
    dynamicBidding?: SponsoredProductsCreateOrUpdateDynamicBidding;
    /**
     * Default: today's date. The format of the date is YYYY-MM-DD.
     * @type {string}
     * @memberof SponsoredProductsCreateCampaign
     */
    startDate?: string;
    /**
     * 
     * @type {SponsoredProductsCreateOrUpdateBudget}
     * @memberof SponsoredProductsCreateCampaign
     */
    budget: SponsoredProductsCreateOrUpdateBudget;
    /**
     * 
     * @type {SponsoredProductsTags}
     * @memberof SponsoredProductsCreateCampaign
     */
    tags?: SponsoredProductsTags;
}