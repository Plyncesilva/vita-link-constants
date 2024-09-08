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
  ErrorCode2[ErrorCode2["NOT_ACTIVE_BEARER_TOKEN"] = 12] = "NOT_ACTIVE_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["NOT_FOUND_RESOURCE_ID"] = 13] = "NOT_FOUND_RESOURCE_ID";
  ErrorCode2[ErrorCode2["CORRUPTED_BEARER_TOKEN"] = 14] = "CORRUPTED_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["EXPIRED_BEARER_TOKEN"] = 15] = "EXPIRED_BEARER_TOKEN";
  ErrorCode2[ErrorCode2["UNAUTHORIZED_RESOURCE"] = 16] = "UNAUTHORIZED_RESOURCE";
  ErrorCode2[ErrorCode2["UNKOWN"] = 17] = "UNKOWN";
  return ErrorCode2;
})(ErrorCode || {});

// src/constants.ts
var PASSWORD_LENGTH = 8;
export {
  ErrorCode,
  PASSWORD_LENGTH
};
