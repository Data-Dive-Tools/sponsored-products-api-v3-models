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
 * You can enable controls to adjust your bid based on the placement location. Specify a location where you want to use bid controls. The percentage value set is the percentage of the original bid for which you want to have your bid adjustment increased. For example, a 50% adjustment on a $1.00 bid would increase the bid to $1.50 for the opportunity to win a specified placement. | Predicate |  Placement | |-----------|------------| | `PLACEMENT_TOP` | Top of search (first page) | | `PLACEMENT_PRODUCT_PAGE` | Product pages | | `PLACEMENT_REST_OF_SEARCH` | Rest of the search (read only) |
 * @export
 * @enum {string}
 */
export enum SponsoredProductsPlacement {
    TOP = 'PLACEMENT_TOP',
    PRODUCTPAGE = 'PLACEMENT_PRODUCT_PAGE',
    RESTOFSEARCH = 'PLACEMENT_REST_OF_SEARCH'
}

