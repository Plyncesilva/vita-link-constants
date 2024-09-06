"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ErrorCode: () => ErrorCode,
  PASSWORD_LENGTH: () => PASSWORD_LENGTH
});
module.exports = __toCommonJS(src_exports);

// src/errorCode.ts
var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
  ErrorCode2[ErrorCode2["MISSING_REQUIRED"] = 0] = "MISSING_REQUIRED";
  ErrorCode2[ErrorCode2["INVALID_DATA"] = 1] = "INVALID_DATA";
  ErrorCode2[ErrorCode2["INVALID_TYPE"] = 2] = "INVALID_TYPE";
  ErrorCode2[ErrorCode2["INVALID_JSON"] = 3] = "INVALID_JSON";
  ErrorCode2[ErrorCode2["INVALID_EMAIL"] = 4] = "INVALID_EMAIL";
  ErrorCode2[ErrorCode2["EMAIL_EXISTS"] = 5] = "EMAIL_EXISTS";
  ErrorCode2[ErrorCode2["PASSWORD_REQUIREMENTS"] = 6] = "PASSWORD_REQUIREMENTS";
  ErrorCode2[ErrorCode2["PASSWORD_COMMON"] = 7] = "PASSWORD_COMMON";
  ErrorCode2[ErrorCode2["NOT_FOUND_ACCOUNT"] = 8] = "NOT_FOUND_ACCOUNT";
  ErrorCode2[ErrorCode2["INVALID_ACCOUNT_ID"] = 9] = "INVALID_ACCOUNT_ID";
  ErrorCode2[ErrorCode2["INVALID_AUTHORIZATION_HEADER"] = 10] = "INVALID_AUTHORIZATION_HEADER";
  ErrorCode2[ErrorCode2["INVALID_BEARER_TOKEN"] = 11] = "INVALID_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["CORRUPTED_BEARER_TOKEN"] = 12] = "CORRUPTED_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["EXPIRED_BEARER_TOKEN"] = 13] = "EXPIRED_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["UNAUTHORIZED_RESOURCE"] = 14] = "UNAUTHORIZED_RESOURCE";
  ErrorCode2[ErrorCode2["UNKOWN"] = 15] = "UNKOWN";
  return ErrorCode2;
})(ErrorCode || {});

// src/constants.ts
var PASSWORD_LENGTH = 8;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorCode,
  PASSWORD_LENGTH
});
