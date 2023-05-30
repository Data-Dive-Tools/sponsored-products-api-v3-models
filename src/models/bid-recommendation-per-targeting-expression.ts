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
import { BidValue } from './bid-value';
import { TargetingExpression } from './targeting-expression';
/**
 * 
 * @export
 * @interface BidRecommendationPerTargetingExpression
 */
export interface BidRecommendationPerTargetingExpression {
    /**
     * 
     * @type {Array<BidValue>}
     * @memberof BidRecommendationPerTargetingExpression
     */
    bidValues: Array<BidValue>;
    /**
     * 
     * @type {TargetingExpression}
     * @memberof BidRecommendationPerTargetingExpression
     */
    targetingExpression: TargetingExpression;
}