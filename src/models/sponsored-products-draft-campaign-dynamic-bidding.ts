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
import { SponsoredProductsBiddingStrategy } from './sponsored-products-bidding-strategy';
import { SponsoredProductsDraftCampaignPlacementBidding } from './sponsored-products-draft-campaign-placement-bidding';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftCampaignDynamicBidding
 */
export interface SponsoredProductsDraftCampaignDynamicBidding {
    /**
     * 
     * @type {Array<SponsoredProductsDraftCampaignPlacementBidding>}
     * @memberof SponsoredProductsDraftCampaignDynamicBidding
     */
    placementBidding?: Array<SponsoredProductsDraftCampaignPlacementBidding>;
    /**
     * 
     * @type {SponsoredProductsBiddingStrategy}
     * @memberof SponsoredProductsDraftCampaignDynamicBidding
     */
    strategy: SponsoredProductsBiddingStrategy;
}
