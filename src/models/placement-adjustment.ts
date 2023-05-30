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
 * Specifies bid adjustments based on the placement location. Use `PLACEMENT_TOP` for the top of the search page. Use `PLACEMENT_PRODUCT_PAGE` for a product page.
 * @export
 * @interface PlacementAdjustment
 */
export interface PlacementAdjustment {
    /**
     * 
     * @type {string}
     * @memberof PlacementAdjustment
     */
    predicate?: PlacementAdjustmentPredicateEnum;
    /**
     * 
     * @type {number}
     * @memberof PlacementAdjustment
     */
    percentage?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum PlacementAdjustmentPredicateEnum {
    TOP = 'PLACEMENT_TOP',
    PRODUCTPAGE = 'PLACEMENT_PRODUCT_PAGE'
}
