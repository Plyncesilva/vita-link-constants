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
  ErrorCode2[ErrorCode2["UNKOWN"] = 8] = "UNKOWN";
  return ErrorCode2;
})(ErrorCode || {});

// src/constants.ts
var PASSWORD_LENGTH = 8;
export {
  ErrorCode,
  PASSWORD_LENGTH
};
