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
 * @interface SevenDaysEstimatedOpportunities
 */
export interface SevenDaysEstimatedOpportunities {
    /**
     * Lower bound of the estimated incremental clicks that could be gained if all optimizations are made.
     * @type {number}
     * @memberof SevenDaysEstimatedOpportunities
     */
    estimatedIncrementalClicksLower?: number;
    /**
     * Upper bound of the estimated incremental clicks that could be gained if all optimizations are made.
     * @type {number}
     * @memberof SevenDaysEstimatedOpportunities
     */
    estimatedIncrementalClicksUpper?: number;
    /**
     * End date of the opportunities date range in YYYY-MM-DDTHH:mm:ssZ format.
     * @type {string}
     * @memberof SevenDaysEstimatedOpportunities
     */
    endDate?: string;
    /**
     * Start date of the opportunities date range in YYYY-MM-DDTHH:mm:ssZ format.
     * @type {string}
     * @memberof SevenDaysEstimatedOpportunities
     */
    startDate?: string;
}
