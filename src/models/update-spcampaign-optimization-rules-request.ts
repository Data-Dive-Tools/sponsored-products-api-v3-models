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
import { CampaignOptimizationId } from './campaign-optimization-id';
import { RecurrenceType } from './recurrence-type';
import { RuleAction } from './rule-action';
import { RuleCampaignId } from './rule-campaign-id';
import { RuleConditionList } from './rule-condition-list';
import { RuleName } from './rule-name';
import { RuleType } from './rule-type';
/**
 * Request object for updating campaign optimization rule
 * @export
 * @interface UpdateSPCampaignOptimizationRulesRequest
 */
export interface UpdateSPCampaignOptimizationRulesRequest {
    /**
     * 
     * @type {RecurrenceType}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    recurrence: RecurrenceType;
    /**
     * 
     * @type {RuleAction}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    ruleAction: RuleAction;
    /**
     * 
     * @type {CampaignOptimizationId}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    campaignOptimizationId: CampaignOptimizationId;
    /**
     * 
     * @type {RuleConditionList}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    ruleCondition: RuleConditionList;
    /**
     * 
     * @type {RuleType}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    ruleType: RuleType;
    /**
     * 
     * @type {RuleName}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    ruleName?: RuleName;
    /**
     * A list of campaign ids
     * @type {Array<RuleCampaignId>}
     * @memberof UpdateSPCampaignOptimizationRulesRequest
     */
    campaignIds: Array<RuleCampaignId>;
}