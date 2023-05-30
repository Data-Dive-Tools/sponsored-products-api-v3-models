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
 * Object representing date range type rule duration.
 * @export
 * @interface DateRangeTypeRuleDuration
 */
export interface DateRangeTypeRuleDuration {
    /**
     * The end date of the budget rule in YYYYMMDD format. The end date is inclusive. Required to be equal or greater than `startDate`.
     * @type {string}
     * @memberof DateRangeTypeRuleDuration
     */
    endDate?: string;
    /**
     * The start date of the budget rule in YYYYMMDD format. The start date is inclusive. Required to be greater than or equal to current date.
     * @type {string}
     * @memberof DateRangeTypeRuleDuration
     */
    startDate: string;
}
