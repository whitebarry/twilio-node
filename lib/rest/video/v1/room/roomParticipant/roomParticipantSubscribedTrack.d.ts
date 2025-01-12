/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type SubscribedTrackKind = 'audio'|'video'|'data';

/**
 * Initialize the SubscribedTrackList
 *
 * @param version - Version of the resource
 * @param roomSid - Unique Room identifier where this Track is published.
 * @param participantSid - Unique Participant identifier that subscribes to this Track.
 */
declare function SubscribedTrackList(version: V1, roomSid: string, participantSid: string): SubscribedTrackListInstance;

interface SubscribedTrackListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SubscribedTrackContext;
  /**
   * Streams SubscribedTrackInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SubscribedTrackListInstanceEachOptions, callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a subscribed_track
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): SubscribedTrackContext;
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SubscribedTrackListInstanceOptions, callback?: (error: Error | null, items: SubscribedTrackInstance[]) => any): Promise<SubscribedTrackInstance[]>;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SubscribedTrackListInstancePageOptions, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SubscribedTrackListInstanceEachOptions {
  callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SubscribedTrackListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SubscribedTrackListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SubscribedTrackPayload extends SubscribedTrackResource, Page.TwilioResponsePayload {
}

interface SubscribedTrackResource {
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  kind: SubscribedTrackKind;
  name: string;
  participant_sid: string;
  publisher_sid: string;
  room_sid: string;
  sid: string;
  url: string;
}

interface SubscribedTrackSolution {
  participantSid?: string;
  roomSid?: string;
}


declare class SubscribedTrackContext {
  /**
   * Initialize the SubscribedTrackContext
   *
   * @param version - Version of the resource
   * @param roomSid - Unique Room identifier where this Track is subscribed.
   * @param participantSid - Unique Participant identifier that subscribes to this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, roomSid: string, participantSid: string, sid: string);

  /**
   * fetch a SubscribedTrackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SubscribedTrackInstance) => any): Promise<SubscribedTrackInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SubscribedTrackInstance extends SerializableClass {
  /**
   * Initialize the SubscribedTrackContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - Unique Room identifier where this Track is published.
   * @param participantSid - Unique Participant identifier that subscribes to this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: SubscribedTrackPayload, roomSid: string, participantSid: string, sid: string);

  private _proxy: SubscribedTrackContext;
  dateCreated: Date;
  dateUpdated: Date;
  enabled: boolean;
  /**
   * fetch a SubscribedTrackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SubscribedTrackInstance) => any): Promise<SubscribedTrackInstance>;
  kind: SubscribedTrackKind;
  name: string;
  participantSid: string;
  publisherSid: string;
  roomSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class SubscribedTrackPage extends Page<V1, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackInstance> {
  /**
   * Initialize the SubscribedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SubscribedTrackSolution);

  /**
   * Build an instance of SubscribedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedTrackPayload): SubscribedTrackInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SubscribedTrackContext, SubscribedTrackInstance, SubscribedTrackList, SubscribedTrackListInstance, SubscribedTrackListInstanceEachOptions, SubscribedTrackListInstanceOptions, SubscribedTrackListInstancePageOptions, SubscribedTrackPage, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackSolution }
