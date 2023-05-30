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
import { SponsoredProductsCreateOrUpdateNegativeTargetingExpressionPredicate } from './sponsored-products-create-or-update-negative-targeting-expression-predicate';
/**
 * 
 * @export
 * @interface SponsoredProductsCreateDraftNegativeTargetingClause
 */
export interface SponsoredProductsCreateDraftNegativeTargetingClause {
    /**
     * The DraftNegativeTargeting expression.
     * @type {Array<SponsoredProductsCreateOrUpdateNegativeTargetingExpressionPredicate>}
     * @memberof SponsoredProductsCreateDraftNegativeTargetingClause
     */
    expression: Array<SponsoredProductsCreateOrUpdateNegativeTargetingExpressionPredicate>;
    /**
     * The identifier of the campaign to which this target is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeTargetingClause
     */
    campaignId: string;
    /**
     * The identifier of the ad group to which this target is associated.
     * @type {string}
     * @memberof SponsoredProductsCreateDraftNegativeTargetingClause
     */
    adGroupId: string;
}