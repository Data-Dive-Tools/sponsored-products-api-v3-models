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
 * @interface GenreLoP
 */
export interface GenreLoP {
    /**
     * Name of Genre.
     * @type {string}
     * @memberof GenreLoP
     */
    name?: string;
    /**
     * Id of Genre. Use the POST /sp/targets/category/{categoryId}/refinements endpoint to retrieve Genre Node IDs.
     * @type {string}
     * @memberof GenreLoP
     */
    id?: string;
    /**
     * Translated name of the Genre based off locale send in the query parameter.
     * @type {string}
     * @memberof GenreLoP
     */
    translatedName?: string;
}
