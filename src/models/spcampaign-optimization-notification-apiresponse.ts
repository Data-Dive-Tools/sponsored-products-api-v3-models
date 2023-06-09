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
import { RuleNotification } from './rule-notification';
import { RuleNotificationError } from './rule-notification-error';
/**
 * 
 * @export
 * @interface SPCampaignOptimizationNotificationAPIResponse
 */
export interface SPCampaignOptimizationNotificationAPIResponse {
    /**
     * List of errors that occured when generating campaign optimization notifications.
     * @type {Array<RuleNotificationError>}
     * @memberof SPCampaignOptimizationNotificationAPIResponse
     */
    campaignOptimizationRecommendationsError?: Array<RuleNotificationError>;
    /**
     * List of successful campaign optimization notifications for campaigns.
     * @type {Array<RuleNotification>}
     * @memberof SPCampaignOptimizationNotificationAPIResponse
     */
    campaignOptimizationNotifications?: Array<RuleNotification>;
}
