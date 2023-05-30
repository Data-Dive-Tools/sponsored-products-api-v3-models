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
import { SponsoredProductsKeywordTextMarketplaceSettings } from './sponsored-products-keyword-text-marketplace-settings';
/**
 * 
 * @export
 * @interface SponsoredProductsGlobalNegativeKeywordText
 */
export interface SponsoredProductsGlobalNegativeKeywordText {
    /**
     * The marketplace settings for keyword text to be overridden for marketplace.
     * @type {Array<SponsoredProductsKeywordTextMarketplaceSettings>}
     * @memberof SponsoredProductsGlobalNegativeKeywordText
     */
    marketplaceSettings?: Array<SponsoredProductsKeywordTextMarketplaceSettings>;
    /**
     * 
     * @type {string}
     * @memberof SponsoredProductsGlobalNegativeKeywordText
     */
    value: string;
}
