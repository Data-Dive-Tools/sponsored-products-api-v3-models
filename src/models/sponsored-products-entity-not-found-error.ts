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
import { SponsoredProductsEntityNotFoundErrorReason } from './sponsored-products-entity-not-found-error-reason';
import { SponsoredProductsEntityType } from './sponsored-products-entity-type';
import { SponsoredProductsErrorCause } from './sponsored-products-error-cause';
/**
 * 
 * @export
 * @interface SponsoredProductsEntityNotFoundError
 */
export interface SponsoredProductsEntityNotFoundError {
    /**
     * 
     * @type {SponsoredProductsEntityNotFoundErrorReason}
     * @memberof SponsoredProductsEntityNotFoundError
     */
    reason: SponsoredProductsEntityNotFoundErrorReason;
    /**
     * 
     * @type {SponsoredProductsEntityType}
     * @memberof SponsoredProductsEntityNotFoundError
     */
    entityType: SponsoredProductsEntityType;
    /**
     * 
     * @type {SponsoredProductsErrorCause}
     * @memberof SponsoredProductsEntityNotFoundError
     */
    cause?: SponsoredProductsErrorCause;
    /**
     * The entity id in the request
     * @type {string}
     * @memberof SponsoredProductsEntityNotFoundError
     */
    entityId: string;
    /**
     * Human readable error message
     * @type {string}
     * @memberof SponsoredProductsEntityNotFoundError
     */
    message: string;
}
