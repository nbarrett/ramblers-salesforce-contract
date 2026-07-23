import type { SupportersErrorType, SupporterUpdateErrorType } from "./types.js";

export const STATUS_BY_SUPPORTERS_ERROR_TYPE: Record<SupportersErrorType, number> = {
  "Unauthorised": 401,
  "Bad request": 400,
  "System unavilable": 503,
};

export const STATUS_BY_SUPPORTER_UPDATE_ERROR_TYPE: Record<SupporterUpdateErrorType, number> = {
  "Email not recognised for this group": 404,
  "Invalid email": 400,
  "System unavilable": 503,
  "Required field missing": 400,
};
