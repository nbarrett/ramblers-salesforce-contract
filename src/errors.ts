import type { ApiErrorCode } from "./types.js";

export const STATUS_BY_API_ERROR_CODE: Record<ApiErrorCode, number> = {
  UNAUTHORIZED: 401,
  GROUP_NOT_FOUND: 404,
  MEMBER_NOT_FOUND: 404,
  BAD_REQUEST: 400,
  RATE_LIMITED: 429,
  INTERNAL_ERROR: 500,
};
