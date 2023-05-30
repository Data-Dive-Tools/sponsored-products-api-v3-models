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
import { ProductRecommendation } from './product-recommendation';
/**
 * Product recommendations supplemented with relevant information.
 * @export
 * @interface ProductRecommendationsByASIN
 */
export interface ProductRecommendationsByASIN {
    /**
     * An identifier to fetch next set of `ProductRecommendation` records in the result set if available. This will be null when at the end of result set.
     * @type {string}
     * @memberof ProductRecommendationsByASIN
     */
    nextCursor?: string;
    /**
     * Optional parameter that links to the previous result set served. This parameter will be null on the first request.
     * @type {string}
     * @memberof ProductRecommendationsByASIN
     */
    previousCursor?: string;
    /**
     * An array of `ProductRecommendation` objects.
     * @type {Array<ProductRecommendation>}
     * @memberof ProductRecommendationsByASIN
     */
    recommendations?: Array<ProductRecommendation>;
}
