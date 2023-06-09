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
/**
 * The bidding strategy selected for the campaign. Use `LEGACY_FOR_SALES` to lower your bid in real time when your ad may be less likely to convert to a sale. Use `AUTO_FOR_SALES` to increase your bid in real time when your ad may be more likely to convert to a sale or lower your bid when less likely to convert to a sale. Use `MANUAL` to use your exact bid along with any manual adjustments.
 * @export
 * @enum {string}
 */
export enum BiddingStrategy {
    LEGACYFORSALES = 'LEGACY_FOR_SALES',
    AUTOFORSALES = 'AUTO_FOR_SALES',
    MANUAL = 'MANUAL',
    RULEBASED = 'RULE_BASED'
}

