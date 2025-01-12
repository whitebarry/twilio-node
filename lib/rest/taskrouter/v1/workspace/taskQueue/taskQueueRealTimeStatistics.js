'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var TaskQueueRealTimeStatisticsList;
var TaskQueueRealTimeStatisticsPage;
var TaskQueueRealTimeStatisticsInstance;
var TaskQueueRealTimeStatisticsContext;

/* jshint ignore:start */
/**
 * Initialize the TaskQueueRealTimeStatisticsList
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsList = function
    TaskQueueRealTimeStatisticsList(version, workspaceSid, taskQueueSid) {
  /* jshint ignore:start */
  /**
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  function TaskQueueRealTimeStatisticsListInstance(sid) {
    return TaskQueueRealTimeStatisticsListInstance.get(sid);
  }

  TaskQueueRealTimeStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueRealTimeStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a task_queue_real_time_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList#
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext}
   */
  /* jshint ignore:end */
  TaskQueueRealTimeStatisticsListInstance.get = function get() {
    return new TaskQueueRealTimeStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  TaskQueueRealTimeStatisticsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  TaskQueueRealTimeStatisticsListInstance[util.inspect.custom] = function
      inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return TaskQueueRealTimeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueRealTimeStatisticsPage
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {TaskQueueRealTimeStatisticsSolution} solution - Path solution
 *
 * @returns TaskQueueRealTimeStatisticsPage
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsPage = function
    TaskQueueRealTimeStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskQueueRealTimeStatisticsPage.prototype, Page.prototype);
TaskQueueRealTimeStatisticsPage.prototype.constructor = TaskQueueRealTimeStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueueRealTimeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsPage#
 *
 * @param {TaskQueueRealTimeStatisticsPayload} payload -
 *          Payload response from the API
 *
 * @returns TaskQueueRealTimeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsPage.prototype.getInstance = function
    getInstance(payload) {
  return new TaskQueueRealTimeStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueueRealTimeStatisticsPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueRealTimeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance
 *
 * @property {string} accountSid - The account_sid
 * @property {object} activityStatistics -
 *          The current Worker status count breakdown by Activity
 * @property {number} longestTaskWaitingAge - The age of the longest waiting Task
 * @property {string} longestTaskWaitingSid - The SID of the longest waiting Task
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {object} tasksByPriority - The Tasks broken down by priority
 * @property {object} tasksByStatus - The Tasks broken down by status
 * @property {number} totalAvailableWorkers -
 *          The total number of Workers available for Tasks in this TaskQueue
 * @property {number} totalEligibleWorkers -
 *          The total number of Workers eligible for Tasks in this TaskQueue, irrespective of Activity state.
 * @property {number} totalTasks - The total number of Tasks
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {V1} version - Version of the resource
 * @param {TaskQueueRealTimeStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsInstance = function
    TaskQueueRealTimeStatisticsInstance(version, payload, workspaceSid,
    taskQueueSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.activityStatistics = payload.activity_statistics; // jshint ignore:line
  this.longestTaskWaitingAge = deserialize.integer(payload.longest_task_waiting_age); // jshint ignore:line
  this.longestTaskWaitingSid = payload.longest_task_waiting_sid; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.tasksByPriority = payload.tasks_by_priority; // jshint ignore:line
  this.tasksByStatus = payload.tasks_by_status; // jshint ignore:line
  this.totalAvailableWorkers = deserialize.integer(payload.total_available_workers); // jshint ignore:line
  this.totalEligibleWorkers = deserialize.integer(payload.total_eligible_workers); // jshint ignore:line
  this.totalTasks = deserialize.integer(payload.total_tasks); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
};

Object.defineProperty(TaskQueueRealTimeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueRealTimeStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a TaskQueueRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.taskChannel] -
 *          Filter real-time and cumulative statistics by TaskChannel.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueRealTimeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsInstance.prototype.fetch = function fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueueRealTimeStatisticsInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueRealTimeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsContext = function
    TaskQueueRealTimeStatisticsContext(version, workspaceSid, taskQueueSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
  this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/RealTimeStatistics`;
};

/* jshint ignore:start */
/**
 * fetch a TaskQueueRealTimeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.taskChannel] -
 *          Filter real-time and cumulative statistics by TaskChannel.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueRealTimeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsContext.prototype.fetch = function fetch(opts,
    callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'TaskChannel': _.get(opts, 'taskChannel')});

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueRealTimeStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueRealTimeStatisticsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

TaskQueueRealTimeStatisticsContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  TaskQueueRealTimeStatisticsList: TaskQueueRealTimeStatisticsList,
  TaskQueueRealTimeStatisticsPage: TaskQueueRealTimeStatisticsPage,
  TaskQueueRealTimeStatisticsInstance: TaskQueueRealTimeStatisticsInstance,
  TaskQueueRealTimeStatisticsContext: TaskQueueRealTimeStatisticsContext
};
