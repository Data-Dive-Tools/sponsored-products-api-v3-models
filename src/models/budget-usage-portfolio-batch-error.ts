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
 * @interface BudgetUsagePortfolioBatchError
 */
export interface BudgetUsagePortfolioBatchError {
    /**
     * ID of requested resource
     * @type {string}
     * @memberof BudgetUsagePortfolioBatchError
     */
    portfolioId?: string;
    /**
     * An enumerated error code for machine use.
     * @type {string}
     * @memberof BudgetUsagePortfolioBatchError
     */
    code?: string;
    /**
     * An index to maintain order of the portfolioIds
     * @type {number}
     * @memberof BudgetUsagePortfolioBatchError
     */
    index?: number;
    /**
     * A human-readable description of the response.
     * @type {string}
     * @memberof BudgetUsagePortfolioBatchError
     */
    details?: string;
}
