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
import { RangeMetricValue } from './range-metric-value';
/**
 * The impact metrics are given in the same order of suggested bids.  Note: This object is nullable
 * @export
 * @interface ImpactMetric
 */
export interface ImpactMetric {
    /**
     * 
     * @type {Array<RangeMetricValue>}
     * @memberof ImpactMetric
     */
    values?: Array<RangeMetricValue>;
}