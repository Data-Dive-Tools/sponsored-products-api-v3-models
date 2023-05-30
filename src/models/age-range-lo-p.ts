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
 * @interface AgeRangeLoP
 */
export interface AgeRangeLoP {
    /**
     * Name of Age Range.
     * @type {string}
     * @memberof AgeRangeLoP
     */
    name?: string;
    /**
     * Id of Age Range. Use the POST /sp/targets/category/{categoryId}/refinements endpoint to retrieve Age Range Node IDs.
     * @type {string}
     * @memberof AgeRangeLoP
     */
    id?: string;
    /**
     * Translated name of Age Range based off locale sent in request.
     * @type {string}
     * @memberof AgeRangeLoP
     */
    translatedName?: string;
}
