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
export enum SponsoredProductsAdServingStatusReason {
    ADGROUPSTATUSENABLEDDETAIL = 'AD_GROUP_STATUS_ENABLED_DETAIL',
    ADGROUPPAUSEDDETAIL = 'AD_GROUP_PAUSED_DETAIL',
    ADGROUPARCHIVEDDETAIL = 'AD_GROUP_ARCHIVED_DETAIL',
    ADGROUPINCOMPLETEDETAIL = 'AD_GROUP_INCOMPLETE_DETAIL',
    ADGROUPPOLICINGPENDINGREVIEWDETAIL = 'AD_GROUP_POLICING_PENDING_REVIEW_DETAIL',
    ADGROUPPOLICINGCREATIVEREJECTEDDETAIL = 'AD_GROUP_POLICING_CREATIVE_REJECTED_DETAIL',
    ADGROUPLOWBIDDETAIL = 'AD_GROUP_LOW_BID_DETAIL',
    CAMPAIGNSTATUSENABLEDDETAIL = 'CAMPAIGN_STATUS_ENABLED_DETAIL',
    CAMPAIGNPAUSEDDETAIL = 'CAMPAIGN_PAUSED_DETAIL',
    CAMPAIGNARCHIVEDDETAIL = 'CAMPAIGN_ARCHIVED_DETAIL',
    PENDINGREVIEWDETAIL = 'PENDING_REVIEW_DETAIL',
    REJECTEDDETAIL = 'REJECTED_DETAIL',
    PENDINGSTARTDATEDETAIL = 'PENDING_START_DATE_DETAIL',
    ENDEDDETAIL = 'ENDED_DETAIL',
    CAMPAIGNOUTOFBUDGETDETAIL = 'CAMPAIGN_OUT_OF_BUDGET_DETAIL',
    CAMPAIGNINCOMPLETEDETAIL = 'CAMPAIGN_INCOMPLETE_DETAIL',
    PORTFOLIOSTATUSENABLEDDETAIL = 'PORTFOLIO_STATUS_ENABLED_DETAIL',
    PORTFOLIOPAUSEDDETAIL = 'PORTFOLIO_PAUSED_DETAIL',
    PORTFOLIOARCHIVEDDETAIL = 'PORTFOLIO_ARCHIVED_DETAIL',
    PORTFOLIOOUTOFBUDGETDETAIL = 'PORTFOLIO_OUT_OF_BUDGET_DETAIL',
    PORTFOLIOPENDINGSTARTDATEDETAIL = 'PORTFOLIO_PENDING_START_DATE_DETAIL',
    PORTFOLIOENDEDDETAIL = 'PORTFOLIO_ENDED_DETAIL',
    ADVERTISERPOLICINGSUSPENDEDDETAIL = 'ADVERTISER_POLICING_SUSPENDED_DETAIL',
    ADVERTISERPOLICINGPENDINGREVIEWDETAIL = 'ADVERTISER_POLICING_PENDING_REVIEW_DETAIL',
    ADVERTISERARCHIVEDDETAIL = 'ADVERTISER_ARCHIVED_DETAIL',
    ADVERTISERPAUSEDDETAIL = 'ADVERTISER_PAUSED_DETAIL',
    ADVERTISEROUTOFBUDGETDETAIL = 'ADVERTISER_OUT_OF_BUDGET_DETAIL',
    ADVERTISERPAYMENTFAILUREDETAIL = 'ADVERTISER_PAYMENT_FAILURE_DETAIL',
    ADSTATUSLIVEDETAIL = 'AD_STATUS_LIVE_DETAIL',
    ADPOLICINGPENDINGREVIEW = 'AD_POLICING_PENDING_REVIEW',
    ADPOLICINGSUSPENDEDDETAIL = 'AD_POLICING_SUSPENDED_DETAIL',
    ADPAUSEDDETAIL = 'AD_PAUSED_DETAIL',
    ADARCHIVEDDETAIL = 'AD_ARCHIVED_DETAIL',
    MISSINGIMAGEDETAIL = 'MISSING_IMAGE_DETAIL',
    MODERATIONADULTPRODUCTPVDETAIL = 'MODERATION_ADULT_PRODUCT_PV_DETAIL',
    MODERATIONADULTNOVELTYPVDETAIL = 'MODERATION_ADULT_NOVELTY_PV_DETAIL',
    MODERATIONADULTSOFTLINESPVDETAIL = 'MODERATION_ADULT_SOFTLINES_PV_DETAIL',
    MODERATIONCONTENTNUDITYPVDETAIL = 'MODERATION_CONTENT_NUDITY_PV_DETAIL',
    MODERATIONCONTENTPROVOCATIVEPVDETAIL = 'MODERATION_CONTENT_PROVOCATIVE_PV_DETAIL',
    MODERATIONCLAIMWEIGHTLOSSPVDETAIL = 'MODERATION_CLAIM_WEIGHTLOSS_PV_DETAIL',
    MODERATIONERROR404PVDETAIL = 'MODERATION_ERROR_404_PV_DETAIL',
    MODERATIONGRAPHICALSEXUALIMAGESPVDETAIL = 'MODERATION_GRAPHICAL_SEXUAL_IMAGES_PV_DETAIL',
    MODERATIONLANGUAGEOFFENSIVEPVDETAIL = 'MODERATION_LANGUAGE_OFFENSIVE_PV_DETAIL',
    MODERATIONHFSSPRODUCTPVDETAIL = 'MODERATION_HFSS_PRODUCT_PV_DETAIL',
    MODERATIONCONTENTSMOKINGPVDETAIL = 'MODERATION_CONTENT_SMOKING_PV_DETAIL',
    MODERATIONSMOKINGRELATEDPVDETAIL = 'MODERATION_SMOKING_RELATED_PV_DETAIL',
    MODERATIONNOTCOMPLIANTTOADPOLICYPVDETAIL = 'MODERATION_NOT_COMPLIANT_TO_AD_POLICY_PV_DETAIL',
    MODERATIONCRITICALEVENTSPVDETAIL = 'MODERATION_CRITICAL_EVENTS_PV_DETAIL',
    ACCOUNTOUTOFBUDGETDETAIL = 'ACCOUNT_OUT_OF_BUDGET_DETAIL',
    ADVERTISERACCOUNTOUTOFBUDGETDETAIL = 'ADVERTISER_ACCOUNT_OUT_OF_BUDGET_DETAIL',
    ADVERTISEREXCEEDSPENDSLIMITDETAIL = 'ADVERTISER_EXCEED_SPENDS_LIMIT_DETAIL',
    ADVERTISERSTATUSENABLEDDETAIL = 'ADVERTISER_STATUS_ENABLED_DETAIL',
    ADCREATIONOFFLINEFAILED = 'AD_CREATION_OFFLINE_FAILED',
    ADCREATIONOFFLINEINPROGRESS = 'AD_CREATION_OFFLINE_IN_PROGRESS',
    ADCREATIONOFFLINEPENDING = 'AD_CREATION_OFFLINE_PENDING',
    CAMPAIGNADSNOTDELIVERINGDETAIL = 'CAMPAIGN_ADS_NOT_DELIVERING_DETAIL',
    LANDINGPAGENOTAVAILABLEDETAIL = 'LANDING_PAGE_NOT_AVAILABLE_DETAIL',
    MISSINGDECORATIONDETAIL = 'MISSING_DECORATION_DETAIL',
    NOTBUYABLEDETAIL = 'NOT_BUYABLE_DETAIL',
    NOTINBUYBOXDETAIL = 'NOT_IN_BUYBOX_DETAIL',
    OUTOFSTOCKDETAIL = 'OUT_OF_STOCK_DETAIL',
    SECURITYSCANPENDINGREVIEW = 'SECURITY_SCAN_PENDING_REVIEW',
    SECURITYSCANREJECTED = 'SECURITY_SCAN_REJECTED',
    STATUSUNAVAILABLE = 'STATUS_UNAVAILABLE',
    TARGETINGCLAUSEARCHIVEDDETAIL = 'TARGETING_CLAUSE_ARCHIVED_DETAIL',
    TARGETINGCLAUSEBLOCKEDDETAIL = 'TARGETING_CLAUSE_BLOCKED_DETAIL',
    TARGETINGCLAUSEPAUSEDDETAIL = 'TARGETING_CLAUSE_PAUSED_DETAIL',
    TARGETINGCLAUSEPOLICINGSUSPENDEDDETAIL = 'TARGETING_CLAUSE_POLICING_SUSPENDED_DETAIL',
    TARGETINGCLAUSESTATUSLIVEDETAIL = 'TARGETING_CLAUSE_STATUS_LIVE_DETAIL',
    ADULTPRODUCT = 'ADULT_PRODUCT',
    ASINQUARANTINED = 'ASIN_QUARANTINED',
    BRANDREMOVED = 'BRAND_REMOVED',
    CBANOTSUPPORTED = 'CBA_NOT_SUPPORTED',
    CLOSEDGL = 'CLOSED_GL',
    CPINELIGIBLE = 'CP_INELIGIBLE',
    CPINELIGIBLEASIN = 'CP_INELIGIBLE_ASIN',
    CPINELIGIBLEUNKNOWN = 'CP_INELIGIBLE_UNKNOWN',
    CPINELIGIBLEVENDOR = 'CP_INELIGIBLE_VENDOR',
    ELIGIBLEDETAIL = 'ELIGIBLE_DETAIL',
    INELIGIBLECONDITION = 'INELIGIBLE_CONDITION',
    INVENTORYINCOMPLETE = 'INVENTORY_INCOMPLETE',
    ITEMMISSING = 'ITEM_MISSING',
    LANDINGPAGEINELIGIBLE = 'LANDING_PAGE_INELIGIBLE',
    NOINVENTORYDETAIL = 'NO_INVENTORY_DETAIL',
    NOPURCHASABLEOFFERDETAIL = 'NO_PURCHASABLE_OFFER_DETAIL',
    OFFERMISSINGDETAIL = 'OFFER_MISSING_DETAIL',
    PIRRULEEXCLUDED = 'PIR_RULE_EXCLUDED',
    RESTRICTEDGL = 'RESTRICTED_GL',
    SKUDEFECTIVE = 'SKU_DEFECTIVE',
    VARIATIONPARENT = 'VARIATION_PARENT',
    ADPOLICINGPENDINGREVIEWDETAIL = 'AD_POLICING_PENDING_REVIEW_DETAIL',
    OTHER = 'OTHER'
}

