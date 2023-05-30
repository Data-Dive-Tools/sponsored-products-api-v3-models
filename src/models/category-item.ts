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
 * 
 * @export
 * @interface CategoryItem
 */
export interface CategoryItem {
    /**
     * The category id of the parent node
     * @type {string}
     * @memberof CategoryItem
     */
    parent?: string;
    /**
     * The path of the category, which contains the current category and all parent categories
     * @type {string}
     * @memberof CategoryItem
     */
    path?: string;
    /**
     * A flag which indicates if the current node may be targeted
     * @type {boolean}
     * @memberof CategoryItem
     */
    canBeTargeted?: boolean;
    /**
     * The name of the category
     * @type {string}
     * @memberof CategoryItem
     */
    name?: string;
    /**
     * The category id of the current node
     * @type {string}
     * @memberof CategoryItem
     */
    id?: string;
}