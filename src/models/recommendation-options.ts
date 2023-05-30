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
 * @interface RecommendationOptions
 */
export interface RecommendationOptions {
    /**
     * The max size of recommended target. Set it to 0 if you only want to rank user-defined keywords.
     * @type {number}
     * @memberof RecommendationOptions
     */
    maxRecommendations?: number;
    /**
     * The ranking metric value. Supported values: CLICKS, CONVERSIONS, DEFAULT. DEFAULT will be applied if no value passed in.
     * @type {string}
     * @memberof RecommendationOptions
     */
    sortDimension?: RecommendationOptionsSortDimensionEnum;
    /**
     * Translations are for readability and do not affect the targeting of ads. Supported marketplace to locale mappings can be found at the <a href='https://advertising.amazon.com/API/docs/en-us/localization/#/Keyword%20Localization'>POST /keywords/localize</a> endpoint. Note: Translations will be null if locale is unsupported.
     * @type {string}
     * @memberof RecommendationOptions
     */
    locale?: RecommendationOptionsLocaleEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum RecommendationOptionsSortDimensionEnum {
    CLICKS = 'CLICKS',
    CONVERSIONS = 'CONVERSIONS',
    DEFAULT = 'DEFAULT'
}
/**
    * @export
    * @enum {string}
    */
export enum RecommendationOptionsLocaleEnum {
    ArEG = 'ar_EG',
    DeDE = 'de_DE',
    EnAE = 'en_AE',
    EnAU = 'en_AU',
    EnCA = 'en_CA',
    EnGB = 'en_GB',
    EnIN = 'en_IN',
    EnSA = 'en_SA',
    EnSG = 'en_SG',
    EnUS = 'en_US',
    EsES = 'es_ES',
    EsMX = 'es_MX',
    FrFR = 'fr_FR',
    ItIT = 'it_IT',
    JaJP = 'ja_JP',
    NlNL = 'nl_NL',
    PlPL = 'pl_PL',
    PtBR = 'pt_BR',
    SvSE = 'sv_SE',
    TrTR = 'tr_TR',
    ZhCN = 'zh_CN'
}

