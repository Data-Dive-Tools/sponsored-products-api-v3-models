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
 * @enum {string}
 */
export enum SponsoredProductsDateErrorReason {
    INVALIDDATE = 'INVALID_DATE',
    STARTDATEEARLIERTHANTODAY = 'START_DATE_EARLIER_THAN_TODAY',
    ENDDATEEARLIERTHANTODAY = 'END_DATE_EARLIER_THAN_TODAY',
    STARTDATELATERTHANMAXIMUM = 'START_DATE_LATER_THAN_MAXIMUM',
    ENDDATELATERTHANMAXIMUM = 'END_DATE_LATER_THAN_MAXIMUM',
    STARTDATEAFTERENDDATE = 'START_DATE_AFTER_END_DATE',
    UPDATINGREADONLYSTARTDATE = 'UPDATING_READ_ONLY_START_DATE',
    UPDATINGREADONLYENDDATE = 'UPDATING_READ_ONLY_END_DATE'
}
