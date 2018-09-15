"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { "revision": "20180908", "documentationLink": "https://cloud.google.com/compute/docs/oslogin/rest/", "id": "oslogin:v1beta", "discoveryVersion": "v1", "version_module": true, "schemas": { "PosixAccount": { "description": "The POSIX account information associated with a Google account.", "type": "object", "properties": { "primary": { "description": "Only one POSIX account can be marked as primary.", "type": "boolean" }, "operatingSystemType": { "description": "The operating system type where this account applies.", "type": "string", "enumDescriptions": ["The operating system type associated with the user account information is\nunspecified.", "Linux user account information.", "Windows user account information."], "enum": ["OPERATING_SYSTEM_TYPE_UNSPECIFIED", "LINUX", "WINDOWS"] }, "accountId": { "description": "Output only. A POSIX account identifier.", "type": "string" }, "gid": { "description": "The default group ID.", "format": "int64", "type": "string" }, "uid": { "description": "The user ID.", "format": "int64", "type": "string" }, "username": { "description": "The username of the POSIX account.", "type": "string" }, "shell": { "description": "The path to the logic shell for this account.", "type": "string" }, "homeDirectory": { "description": "The path to the home directory for this account.", "type": "string" }, "gecos": { "description": "The GECOS (user information) entry for this account.", "type": "string" }, "systemId": { "description": "System identifier for which account the username or uid applies to.\nBy default, the empty value is used.", "type": "string" } }, "id": "PosixAccount" }, "LoginProfile": { "description": "The user profile information used for logging in to a virtual machine on\nGoogle Compute Engine.", "type": "object", "properties": { "name": { "description": "A unique user ID.", "type": "string" }, "posixAccounts": { "description": "The list of POSIX accounts associated with the user.", "type": "array", "items": { "$ref": "PosixAccount" } }, "sshPublicKeys": { "additionalProperties": { "$ref": "SshPublicKey" }, "description": "A map from SSH public key fingerprint to the associated key object.", "type": "object" } }, "id": "LoginProfile" }, "Empty": { "properties": {}, "id": "Empty", "description": "A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.", "type": "object" }, "SshPublicKey": { "properties": { "expirationTimeUsec": { "description": "An expiration time in microseconds since epoch.", "format": "int64", "type": "string" }, "fingerprint": { "description": "Output only. The SHA-256 fingerprint of the SSH public key.", "type": "string" }, "key": { "description": "Public key text in SSH format, defined by\n<a href=\"https://www.ietf.org/rfc/rfc4253.txt\" target=\"_blank\">RFC4253</a>\nsection 6.6.", "type": "string" } }, "id": "SshPublicKey", "description": "The SSH public key information associated with a Google account.", "type": "object" }, "ImportSshPublicKeyResponse": { "description": "A response message for importing an SSH public key.", "type": "object", "properties": { "loginProfile": { "$ref": "LoginProfile", "description": "The login profile information for the user." } }, "id": "ImportSshPublicKeyResponse" } }, "protocol": "rest", "icons": { "x16": "http://www.google.com/images/icons/product/search-16.gif", "x32": "http://www.google.com/images/icons/product/search-32.gif" }, "canonicalName": "Cloud OS Login", "auth": { "oauth2": { "scopes": { "https://www.googleapis.com/auth/cloud-platform.read-only": { "description": "View your data across Google Cloud Platform services" }, "https://www.googleapis.com/auth/cloud-platform": { "description": "View and manage your data across Google Cloud Platform services" }, "https://www.googleapis.com/auth/compute.readonly": { "description": "View your Google Compute Engine resources" }, "https://www.googleapis.com/auth/compute": { "description": "View and manage your Google Compute Engine resources" } } } }, "rootUrl": "https://oslogin.googleapis.com/", "ownerDomain": "google.com", "name": "oslogin", "batchPath": "batch", "fullyEncodeReservedExpansion": true, "title": "Cloud OS Login API", "ownerName": "Google", "resources": { "users": { "methods": { "importSshPublicKey": { "request": { "$ref": "SshPublicKey" }, "description": "Adds an SSH public key and returns the profile information. Default POSIX\naccount information is set when no username and UID exist as part of the\nlogin profile.", "response": { "$ref": "ImportSshPublicKeyResponse" }, "parameterOrder": ["parent"], "httpMethod": "POST", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/compute"], "parameters": { "projectId": { "location": "query", "description": "The project ID of the Google Cloud Platform project.", "type": "string" }, "parent": { "description": "The unique ID for the user in format `users/{user}`.", "required": true, "type": "string", "pattern": "^users/[^/]+$", "location": "path" } }, "flatPath": "v1beta/users/{usersId}:importSshPublicKey", "path": "v1beta/{+parent}:importSshPublicKey", "id": "oslogin.users.importSshPublicKey" }, "getLoginProfile": { "description": "Retrieves the profile information used for logging in to a virtual machine\non Google Compute Engine.", "response": { "$ref": "LoginProfile" }, "parameterOrder": ["name"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/cloud-platform.read-only", "https://www.googleapis.com/auth/compute", "https://www.googleapis.com/auth/compute.readonly"], "parameters": { "name": { "description": "The unique ID for the user in format `users/{user}`.", "required": true, "type": "string", "pattern": "^users/[^/]+$", "location": "path" } }, "flatPath": "v1beta/users/{usersId}/loginProfile", "path": "v1beta/{+name}/loginProfile", "id": "oslogin.users.getLoginProfile" } }, "resources": { "projects": { "methods": { "delete": { "response": { "$ref": "Empty" }, "parameterOrder": ["name"], "httpMethod": "DELETE", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/compute"], "parameters": { "name": { "description": "A reference to the POSIX account to update. POSIX accounts are identified\nby the project ID they are associated with. A reference to the POSIX\naccount is in format `users/{user}/projects/{project}`.", "required": true, "type": "string", "pattern": "^users/[^/]+/projects/[^/]+$", "location": "path" } }, "flatPath": "v1beta/users/{usersId}/projects/{projectsId}", "path": "v1beta/{+name}", "id": "oslogin.users.projects.delete", "description": "Deletes a POSIX account." } } }, "sshPublicKeys": { "methods": { "delete": { "description": "Deletes an SSH public key.", "httpMethod": "DELETE", "response": { "$ref": "Empty" }, "parameterOrder": ["name"], "parameters": { "name": { "location": "path", "description": "The fingerprint of the public key to update. Public keys are identified by\ntheir SHA-256 fingerprint. The fingerprint of the public key is in format\n`users/{user}/sshPublicKeys/{fingerprint}`.", "required": true, "type": "string", "pattern": "^users/[^/]+/sshPublicKeys/[^/]+$" } }, "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/compute"], "flatPath": "v1beta/users/{usersId}/sshPublicKeys/{sshPublicKeysId}", "id": "oslogin.users.sshPublicKeys.delete", "path": "v1beta/{+name}" }, "get": { "description": "Retrieves an SSH public key.", "response": { "$ref": "SshPublicKey" }, "parameterOrder": ["name"], "httpMethod": "GET", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/compute"], "parameters": { "name": { "description": "The fingerprint of the public key to retrieve. Public keys are identified\nby their SHA-256 fingerprint. The fingerprint of the public key is in\nformat `users/{user}/sshPublicKeys/{fingerprint}`.", "required": true, "type": "string", "pattern": "^users/[^/]+/sshPublicKeys/[^/]+$", "location": "path" } }, "flatPath": "v1beta/users/{usersId}/sshPublicKeys/{sshPublicKeysId}", "path": "v1beta/{+name}", "id": "oslogin.users.sshPublicKeys.get" }, "patch": { "request": { "$ref": "SshPublicKey" }, "description": "Updates an SSH public key and returns the profile information. This method\nsupports patch semantics.", "response": { "$ref": "SshPublicKey" }, "parameterOrder": ["name"], "httpMethod": "PATCH", "scopes": ["https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/compute"], "parameters": { "name": { "location": "path", "description": "The fingerprint of the public key to update. Public keys are identified by\ntheir SHA-256 fingerprint. The fingerprint of the public key is in format\n`users/{user}/sshPublicKeys/{fingerprint}`.", "required": true, "type": "string", "pattern": "^users/[^/]+/sshPublicKeys/[^/]+$" }, "updateMask": { "description": "Mask to control which fields get updated. Updates all if not present.", "format": "google-fieldmask", "type": "string", "location": "query" } }, "flatPath": "v1beta/users/{usersId}/sshPublicKeys/{sshPublicKeysId}", "path": "v1beta/{+name}", "id": "oslogin.users.sshPublicKeys.patch" } } } } } }, "parameters": { "fields": { "location": "query", "description": "Selector specifying which fields to include in a partial response.", "type": "string" }, "uploadType": { "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").", "type": "string", "location": "query" }, "callback": { "description": "JSONP", "type": "string", "location": "query" }, "oauth_token": { "description": "OAuth 2.0 token for the current user.", "type": "string", "location": "query" }, "$.xgafv": { "enum": ["1", "2"], "description": "V1 error format.", "type": "string", "enumDescriptions": ["v1 error format", "v2 error format"], "location": "query" }, "alt": { "description": "Data format for response.", "default": "json", "enum": ["json", "media", "proto"], "type": "string", "enumDescriptions": ["Responses with Content-Type of application/json", "Media download with context-dependent Content-Type", "Responses with Content-Type of application/x-protobuf"], "location": "query" }, "access_token": { "location": "query", "description": "OAuth access token.", "type": "string" }, "key": { "location": "query", "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.", "type": "string" }, "upload_protocol": { "location": "query", "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").", "type": "string" }, "prettyPrint": { "location": "query", "description": "Returns response with indentations and line breaks.", "type": "boolean", "default": "true" }, "quotaUser": { "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.", "type": "string", "location": "query" } }, "version": "v1beta", "baseUrl": "https://oslogin.googleapis.com/", "kind": "discovery#restDescription", "description": "Manages OS login configuration for Google account users.", "servicePath": "", "basePath": "" };
//# sourceMappingURL=oslogin-v1beta.js.map