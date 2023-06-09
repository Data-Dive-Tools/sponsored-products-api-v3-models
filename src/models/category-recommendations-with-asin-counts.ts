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
import { CategoryItemWithAsinCounts } from './category-item-with-asin-counts';
/**
 * Response object for the GetCategoryRecommendationsForAsins API.
 * @export
 * @interface CategoryRecommendationsWithAsinCounts
 */
export interface CategoryRecommendationsWithAsinCounts {
    /**
     * List of category recommendations
     * @type {Array<CategoryItemWithAsinCounts>}
     * @memberof CategoryRecommendationsWithAsinCounts
     */
    categories?: Array<CategoryItemWithAsinCounts>;
}
