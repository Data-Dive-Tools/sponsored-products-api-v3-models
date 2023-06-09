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
import { BidSuggestion } from './bid-suggestion';
import { KeywordTarget } from './keyword-target';
/**
 * 
 * @export
 * @interface KeywordTargetResponse
 */
export interface KeywordTargetResponse extends KeywordTarget {
    /**
     * 
     * @type {BidSuggestion}
     * @memberof KeywordTargetResponse
     */
    suggestedBid?: BidSuggestion;
    /**
     * The translation of keyword if a locale is passed in
     * @type {string}
     * @memberof KeywordTargetResponse
     */
    translation?: string;
    /**
     * The keyword target rank
     * @type {number}
     * @memberof KeywordTargetResponse
     */
    rank?: number;
}


