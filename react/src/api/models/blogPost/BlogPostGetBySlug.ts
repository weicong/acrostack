/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogPostDto } from "../acroStack/services/dtos/cms/BlogPostDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostGetBySlugPathBlogId = string;

/**
 * @type string | undefined
 */
export type BlogPostGetBySlugQuerySlug = string | undefined;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus200Plain = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus200Json = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus200Json2 = AcroStackServicesDtosCmsBlogPostDto;

export type BlogPostGetBySlugStatus200 =
  | BlogPostGetBySlugStatus200Plain
  | BlogPostGetBySlugStatus200Json
  | BlogPostGetBySlugStatus200Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus400 =
  | BlogPostGetBySlugStatus400Plain
  | BlogPostGetBySlugStatus400Json
  | BlogPostGetBySlugStatus400Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus401 =
  | BlogPostGetBySlugStatus401Plain
  | BlogPostGetBySlugStatus401Json
  | BlogPostGetBySlugStatus401Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus403 =
  | BlogPostGetBySlugStatus403Plain
  | BlogPostGetBySlugStatus403Json
  | BlogPostGetBySlugStatus403Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus404 =
  | BlogPostGetBySlugStatus404Plain
  | BlogPostGetBySlugStatus404Json
  | BlogPostGetBySlugStatus404Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus500 =
  | BlogPostGetBySlugStatus500Plain
  | BlogPostGetBySlugStatus500Json
  | BlogPostGetBySlugStatus500Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetBySlugStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetBySlugStatus501 =
  | BlogPostGetBySlugStatus501Plain
  | BlogPostGetBySlugStatus501Json
  | BlogPostGetBySlugStatus501Json2;

/**
 * @type object
 */
export type BlogPostGetBySlugRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogId: BlogPostGetBySlugPathBlogId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    slug?: BlogPostGetBySlugQuerySlug;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/blog-post/by-slug/${string}`;
};

/**
 * @type object
 */
export type BlogPostGetBySlugResponses = {
  "200": BlogPostGetBySlugStatus200;
  "400": BlogPostGetBySlugStatus400;
  "401": BlogPostGetBySlugStatus401;
  "403": BlogPostGetBySlugStatus403;
  "404": BlogPostGetBySlugStatus404;
  "500": BlogPostGetBySlugStatus500;
  "501": BlogPostGetBySlugStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostGetBySlugResponse =
  | BlogPostGetBySlugStatus200
  | BlogPostGetBySlugStatus400
  | BlogPostGetBySlugStatus401
  | BlogPostGetBySlugStatus403
  | BlogPostGetBySlugStatus404
  | BlogPostGetBySlugStatus500
  | BlogPostGetBySlugStatus501;
