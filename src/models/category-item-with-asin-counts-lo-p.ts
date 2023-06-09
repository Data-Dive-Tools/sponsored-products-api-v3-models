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
import { IntegerRange } from './integer-range';
/**
 * 
 * @export
 * @interface CategoryItemWithAsinCountsLoP
 */
export interface CategoryItemWithAsinCountsLoP {
    /**
     * The path of the category, which contains the current category and all parent categories
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    categoryPath?: string;
    /**
     * The name of the category
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    name?: string;
    /**
     * The translated path of the category, which contains the current category and all parent categories.
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    translatedCategoryPath?: string;
    /**
     * 
     * @type {IntegerRange}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    asinCounts?: IntegerRange;
    /**
     * The category id of the parent node
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    parentCategoryId?: string;
    /**
     * The category id of the current node
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    id?: string;
    /**
     * The translated name of the category.
     * @type {string}
     * @memberof CategoryItemWithAsinCountsLoP
     */
    translatedName?: string;
}
