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
import { DayOfWeek } from './day-of-week';
import { RecurrenceType } from './recurrence-type';
/**
 * 
 * @export
 * @interface Recurrence
 */
export interface Recurrence {
    /**
     * 
     * @type {RecurrenceType}
     * @memberof Recurrence
     */
    type?: RecurrenceType;
    /**
     * Object representing days of the week for weekly type rule. It is not required for daily recurrence type
     * @type {Array<DayOfWeek>}
     * @memberof Recurrence
     */
    daysOfWeek?: Array<DayOfWeek>;
}