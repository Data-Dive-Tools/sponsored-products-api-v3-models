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
import { BudgetChangeType } from './budget-change-type';
/**
 * 
 * @export
 * @interface BudgetIncreaseBy
 */
export interface BudgetIncreaseBy {
    /**
     * 
     * @type {BudgetChangeType}
     * @memberof BudgetIncreaseBy
     */
    type: BudgetChangeType;
    /**
     * The budget value.
     * @type {number}
     * @memberof BudgetIncreaseBy
     */
    value: number;
}
