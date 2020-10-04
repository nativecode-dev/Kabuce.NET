/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Operation } from '../models/operation';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrganizationsGet
   */
  static readonly ApiOrganizationsGetPath = '/api/organizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Organization>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Organization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsGet$Plain(params?: {

  }): Observable<Array<Organization>> {

    return this.apiOrganizationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Organization>>) => r.body as Array<Organization>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Organization>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Organization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsGet$Json(params?: {

  }): Observable<Array<Organization>> {

    return this.apiOrganizationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Organization>>) => r.body as Array<Organization>)
    );
  }

  /**
   * Path part for operation apiOrganizationsPost
   */
  static readonly ApiOrganizationsPostPath = '/api/organizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsPost$Plain$Response(params?: {
      body?: Organization
  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsPost$Plain(params?: {
      body?: Organization
  }): Observable<Organization> {

    return this.apiOrganizationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsPost$Json$Response(params?: {
      body?: Organization
  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsPost$Json(params?: {
      body?: Organization
  }): Observable<Organization> {

    return this.apiOrganizationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * Path part for operation apiOrganizationsDomainGet
   */
  static readonly ApiOrganizationsDomainGetPath = '/api/organizations/{domain}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsDomainGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsDomainGet$Plain$Response(params: {
    domain: null | string;

  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsDomainGetPath, 'get');
    if (params) {

      rb.path('domain', params.domain, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsDomainGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsDomainGet$Plain(params: {
    domain: null | string;

  }): Observable<Organization> {

    return this.apiOrganizationsDomainGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsDomainGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsDomainGet$Json$Response(params: {
    domain: null | string;

  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsDomainGetPath, 'get');
    if (params) {

      rb.path('domain', params.domain, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsDomainGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationsDomainGet$Json(params: {
    domain: null | string;

  }): Observable<Organization> {

    return this.apiOrganizationsDomainGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * Path part for operation apiOrganizationsDomainPatch
   */
  static readonly ApiOrganizationsDomainPatchPath = '/api/organizations/{domain}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsDomainPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsDomainPatch$Plain$Response(params: {
    domain: null | string;
      body?: null | Array<Operation>
  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsDomainPatchPath, 'patch');
    if (params) {

      rb.path('domain', params.domain, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsDomainPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsDomainPatch$Plain(params: {
    domain: null | string;
      body?: null | Array<Operation>
  }): Observable<Organization> {

    return this.apiOrganizationsDomainPatch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationsDomainPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsDomainPatch$Json$Response(params: {
    domain: null | string;
      body?: null | Array<Operation>
  }): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationsDomainPatchPath, 'patch');
    if (params) {

      rb.path('domain', params.domain, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationsDomainPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationsDomainPatch$Json(params: {
    domain: null | string;
      body?: null | Array<Operation>
  }): Observable<Organization> {

    return this.apiOrganizationsDomainPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

}
