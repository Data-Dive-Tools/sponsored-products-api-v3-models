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
import { SponsoredProductsDraftNegativeTargetingClauseExtendedData } from './sponsored-products-draft-negative-targeting-clause-extended-data';
import { SponsoredProductsNegativeTargetingExpressionPredicate } from './sponsored-products-negative-targeting-expression-predicate';
/**
 * 
 * @export
 * @interface SponsoredProductsDraftNegativeTargetingClause
 */
export interface SponsoredProductsDraftNegativeTargetingClause {
    /**
     * The DraftNegativeTargeting expression.
     * @type {Array<SponsoredProductsNegativeTargetingExpressionPredicate>}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    expression: Array<SponsoredProductsNegativeTargetingExpressionPredicate>;
    /**
     * The target identifier
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    targetId: string;
    /**
     * The resolved DraftNegativeTargeting expression.
     * @type {Array<SponsoredProductsNegativeTargetingExpressionPredicate>}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    resolvedExpression: Array<SponsoredProductsNegativeTargetingExpressionPredicate>;
    /**
     * The identifier of the campaign to which this target is associated.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    campaignId: string;
    /**
     * The identifier of the ad group to which this target is associated.
     * @type {string}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    adGroupId: string;
    /**
     * 
     * @type {SponsoredProductsDraftNegativeTargetingClauseExtendedData}
     * @memberof SponsoredProductsDraftNegativeTargetingClause
     */
    extendedData?: SponsoredProductsDraftNegativeTargetingClauseExtendedData;
}
