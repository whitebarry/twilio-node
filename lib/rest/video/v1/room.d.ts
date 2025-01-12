/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ParticipantList } from './room/roomParticipant';
import { ParticipantListInstance } from './room/roomParticipant';
import { RoomRecordingList } from './room/recording';
import { RoomRecordingListInstance } from './room/recording';
import { SerializableClass } from '../../../interfaces';

type RoomRoomStatus = 'in-progress'|'completed'|'failed';

type RoomRoomType = 'peer-to-peer'|'group'|'group-small';

type RoomVideoCodec = 'VP8'|'H264';

/**
 * Initialize the RoomList
 *
 * @param version - Version of the resource
 */
declare function RoomList(version: V1): RoomListInstance;

/**
 * Options to pass to update
 *
 * @property status - Set to completed to end the Room.
 */
interface RoomInstanceUpdateOptions {
  status: RoomRoomStatus;
}

interface RoomListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RoomContext;
  /**
   * create a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RoomListInstanceCreateOptions, callback?: (error: Error | null, item: RoomInstance) => any): Promise<RoomInstance>;
  /**
   * Streams RoomInstance records from the API.
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
  each(opts?: RoomListInstanceEachOptions, callback?: (item: RoomInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a room
   *
   * @param sid - The Room Sid or name that uniquely identifies this resource.
   */
  get(sid: string): RoomContext;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RoomListInstanceOptions, callback?: (error: Error | null, items: RoomInstance[]) => any): Promise<RoomInstance[]>;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RoomListInstancePageOptions, callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property enableTurn - Use Twilio Network Traversal for TURN service.
 * @property maxParticipants - Maximum number of Participants in the Room.
 * @property mediaRegion - Region for the media server in Group Rooms.
 * @property recordParticipantsOnConnect - Start Participant recording when connected.
 * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every room event.
 * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
 * @property type - Type of room, either peer-to-peer, group-small or group.
 * @property uniqueName - Name of the Room.
 * @property videoCodecs - An array of video codecs supported when publishing a Track in the Room.
 */
interface RoomListInstanceCreateOptions {
  enableTurn?: boolean;
  maxParticipants?: number;
  mediaRegion?: string;
  recordParticipantsOnConnect?: boolean;
  statusCallback?: string;
  statusCallbackMethod?: string;
  type?: RoomRoomType;
  uniqueName?: string;
  videoCodecs?: RoomVideoCodec | RoomVideoCodec[];
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Only show Rooms that started on or after this date, given as YYYY-MM-DD.
 * @property dateCreatedBefore - Only show Rooms that started before this date, given as YYYY-MM-DD.
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
 * @property status - Only show Rooms with the given status.
 * @property uniqueName - Only show Rooms with the provided Name.
 */
interface RoomListInstanceEachOptions {
  callback?: (item: RoomInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
  status?: RoomRoomStatus;
  uniqueName?: string;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Only show Rooms that started on or after this date, given as YYYY-MM-DD.
 * @property dateCreatedBefore - Only show Rooms that started before this date, given as YYYY-MM-DD.
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
 * @property status - Only show Rooms with the given status.
 * @property uniqueName - Only show Rooms with the provided Name.
 */
interface RoomListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
  status?: RoomRoomStatus;
  uniqueName?: string;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Only show Rooms that started on or after this date, given as YYYY-MM-DD.
 * @property dateCreatedBefore - Only show Rooms that started before this date, given as YYYY-MM-DD.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - Only show Rooms with the given status.
 * @property uniqueName - Only show Rooms with the provided Name.
 */
interface RoomListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: RoomRoomStatus;
  uniqueName?: string;
}

interface RoomPayload extends RoomResource, Page.TwilioResponsePayload {
}

interface RoomResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: number;
  enable_turn: boolean;
  end_time: Date;
  links: string;
  max_participants: number;
  media_region: string;
  record_participants_on_connect: boolean;
  sid: string;
  status: RoomRoomStatus;
  status_callback: string;
  status_callback_method: string;
  type: RoomRoomType;
  unique_name: string;
  url: string;
  video_codecs: RoomVideoCodec[];
}

interface RoomSolution {
}


declare class RoomContext {
  /**
   * Initialize the RoomContext
   *
   * @param version - Version of the resource
   * @param sid - The Room Sid or name that uniquely identifies this resource.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomInstance) => any): Promise<RoomInstance>;
  participants: ParticipantListInstance;
  recordings: RoomRecordingListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoomInstanceUpdateOptions, callback?: (error: Error | null, items: RoomInstance) => any): Promise<RoomInstance>;
}


declare class RoomInstance extends SerializableClass {
  /**
   * Initialize the RoomContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Room Sid or name that uniquely identifies this resource.
   */
  constructor(version: V1, payload: RoomPayload, sid: string);

  private _proxy: RoomContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  duration: number;
  enableTurn: boolean;
  endTime: Date;
  /**
   * fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomInstance) => any): Promise<RoomInstance>;
  links: string;
  maxParticipants: number;
  mediaRegion: string;
  /**
   * Access the participants
   */
  participants(): ParticipantListInstance;
  recordParticipantsOnConnect: boolean;
  /**
   * Access the recordings
   */
  recordings(): RoomRecordingListInstance;
  sid: string;
  status: RoomRoomStatus;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: RoomRoomType;
  uniqueName: string;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoomInstanceUpdateOptions, callback?: (error: Error | null, items: RoomInstance) => any): Promise<RoomInstance>;
  url: string;
  videoCodecs: RoomVideoCodec[];
}


declare class RoomPage extends Page<V1, RoomPayload, RoomResource, RoomInstance> {
  /**
   * Initialize the RoomPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoomSolution);

  /**
   * Build an instance of RoomInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomPayload): RoomInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RoomContext, RoomInstance, RoomInstanceUpdateOptions, RoomList, RoomListInstance, RoomListInstanceCreateOptions, RoomListInstanceEachOptions, RoomListInstanceOptions, RoomListInstancePageOptions, RoomPage, RoomPayload, RoomResource, RoomSolution }
