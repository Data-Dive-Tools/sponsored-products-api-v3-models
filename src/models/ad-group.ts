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
import { TargetingExpression } from './targeting-expression';
/**
 * 
 * @export
 * @interface AdGroup
 */
export interface AdGroup {
    /**
     * The list of targeting expressions. Maximum of 100 per request.
     * @type {Array<TargetingExpression>}
     * @memberof AdGroup
     */
    targetingExpressions: Array<TargetingExpression>;
    /**
     * The list of ad ASINs in the ad group.
     * @type {Array<string>}
     * @memberof AdGroup
     */
    asins: Array<string>;
    /**
     * The ad group identifier.
     * @type {string}
     * @memberof AdGroup
     */
    adGroupId?: string;
}
