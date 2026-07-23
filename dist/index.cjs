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
var index_exports = {};
__export(index_exports, {
  INSIGHT_HUB_COLUMNS: () => INSIGHT_HUB_COLUMNS,
  STATUS_BY_SUPPORTERS_ERROR_TYPE: () => STATUS_BY_SUPPORTERS_ERROR_TYPE,
  STATUS_BY_SUPPORTER_UPDATE_ERROR_TYPE: () => STATUS_BY_SUPPORTER_UPDATE_ERROR_TYPE,
  bouncedEmailRequestSchema: () => bouncedEmailRequestSchema,
  buildOpenApiDocument: () => buildOpenApiDocument,
  findColumn: () => findColumn,
  memberTypeSchema: () => memberTypeSchema,
  membershipStatusSchema: () => membershipStatusSchema,
  normaliseHeader: () => normaliseHeader,
  supporterSchema: () => supporterSchema,
  supporterUpdateErrorSchema: () => supporterUpdateErrorSchema,
  supporterUpdateSuccessSchema: () => supporterUpdateSuccessSchema,
  supportersErrorSchema: () => supportersErrorSchema,
  supportersQuerySchema: () => supportersQuerySchema,
  supportersResponseSchema: () => supportersResponseSchema,
  teamStatusSchema: () => teamStatusSchema,
  unsubscribeRequestSchema: () => unsubscribeRequestSchema,
  volunteerRoleSchema: () => volunteerRoleSchema
});
module.exports = __toCommonJS(index_exports);

// src/errors.ts
var STATUS_BY_SUPPORTERS_ERROR_TYPE = {
  "Unauthorised": 401,
  "Bad request": 400,
  "System unavilable": 503
};
var STATUS_BY_SUPPORTER_UPDATE_ERROR_TYPE = {
  "Email not recognised for this group": 404,
  "Invalid email": 400,
  "System unavilable": 503,
  "Required field missing": 400
};

// src/schemas.ts
var import_zod = require("zod");
var membershipStatusSchema = import_zod.z.enum([
  "Active",
  "Payment pending",
  "Suspended",
  "Lapsed",
  "Inactive",
  "Resigned"
]);
var memberTypeSchema = import_zod.z.enum([
  "Corporate Membership",
  "Individual Life Membership",
  "Individual Membership",
  "Joint Life Membership",
  "Joint Membership",
  "Membership"
]);
var teamStatusSchema = import_zod.z.enum([
  "Member",
  "Affiliated",
  "Volunteer",
  "Wellbeing Walker"
]);
var volunteerRoleSchema = import_zod.z.object({
  roleName: import_zod.z.string(),
  startDate: import_zod.z.string().date(),
  displayName: import_zod.z.string().nullable(),
  walkLeaderStatus: import_zod.z.string().nullable(),
  wellbeingWalksRole: import_zod.z.boolean()
});
var supporterSchema = import_zod.z.object({
  membershipNo: import_zod.z.string().nullable(),
  memberRef: import_zod.z.string(),
  contactId: import_zod.z.string(),
  title: import_zod.z.string().nullable(),
  firstName: import_zod.z.string().nullable(),
  lastName: import_zod.z.string(),
  email: import_zod.z.string().email().nullable(),
  doNotEmail: import_zod.z.boolean(),
  landline: import_zod.z.string().nullable(),
  mobile: import_zod.z.string().nullable(),
  friendlyName: import_zod.z.string(),
  membershipStatus: membershipStatusSchema.nullable(),
  memberType: memberTypeSchema.nullable(),
  membershipJoinDate: import_zod.z.string().date().nullable(),
  membershipExpiry: import_zod.z.string().date().nullable(),
  membershipEndDate: import_zod.z.string().date().nullable(),
  teamStatus: teamStatusSchema,
  teamRelationshipFrom: import_zod.z.string().date().nullable(),
  wellbeingWalker: import_zod.z.boolean(),
  walkLeader: import_zod.z.boolean(),
  volunteerRoles: import_zod.z.array(volunteerRoleSchema),
  noWalkProgram: import_zod.z.boolean(),
  noCampaigning: import_zod.z.boolean(),
  noSurveys: import_zod.z.boolean(),
  canEmailVolunteers: import_zod.z.boolean(),
  canEmailMembers: import_zod.z.boolean(),
  canEmailWellbeingWalkers: import_zod.z.boolean(),
  canViewMemberData: import_zod.z.boolean(),
  canViewMemberDate: import_zod.z.boolean(),
  emailConsent: import_zod.z.boolean(),
  emailConsentLastUpdated: import_zod.z.string().date().nullable(),
  postConsent: import_zod.z.boolean(),
  postConsentLastUpdated: import_zod.z.string().date().nullable(),
  phoneConsent: import_zod.z.boolean(),
  phoneConsentLastUpdated: import_zod.z.string().date().nullable(),
  emailConsentWellbeingWalks: import_zod.z.boolean()
});
var supportersResponseSchema = import_zod.z.array(supporterSchema);
var supportersErrorSchema = import_zod.z.object({
  errorType: import_zod.z.enum(["Unauthorised", "Bad request", "System unavilable"]),
  errorDescription: import_zod.z.string()
});
var supporterUpdateSuccessSchema = import_zod.z.object({
  responseText: import_zod.z.enum(["Update processed", "Bounce logged"])
});
var supporterUpdateErrorSchema = import_zod.z.object({
  errorType: import_zod.z.enum([
    "Email not recognised for this group",
    "Invalid email",
    "System unavilable",
    "Required field missing"
  ]),
  errorDescription: import_zod.z.string()
});
var supportersQuerySchema = import_zod.z.object({
  api_key: import_zod.z.string().min(1),
  team_code: import_zod.z.string().min(1)
});
var unsubscribeRequestSchema = import_zod.z.object({
  emailAddress: import_zod.z.string().email(),
  memberRef: import_zod.z.string().min(1)
});
var bouncedEmailRequestSchema = import_zod.z.object({
  emailAddress: import_zod.z.string().email(),
  memberRef: import_zod.z.string().min(1),
  bounceType: import_zod.z.enum(["Hard", "Soft"])
});

// openapi/upstream.json
var upstream_default = {
  openapi: "3.0.3",
  servers: [
    {
      description: "SwaggerHub API Auto Mocking",
      url: "https://virtserver.swaggerhub.com/JAMESKEARS/ramblers-group-email/1.0.0"
    }
  ],
  info: {
    description: "draft",
    version: "1.0.0",
    title: "Ramblers Team Emails",
    contact: {
      email: "membership@ramblers.org.uk"
    }
  },
  paths: {
    "/get_supporters": {
      get: {
        summary: "retrieves the current supporters for the team",
        operationId: "getTeamSupporters",
        description: "Gets a list of supporters for the team. Includes:\n- members (including payment pending and suspended)\n- affiliated members (including payment pending and suspended)\n- volunteers (only those with a current role with this team)\n- Wellbeing walkers\n",
        responses: {
          "200": {
            description: "Team members, affiliated members, volunteers and wellbeing walkers returned",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/supporter"
                  }
                }
              }
            }
          },
          "400": {
            description: "Bad requests, typically missing field",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/getSupportersError"
                }
              }
            }
          },
          "401": {
            description: "Unauthorised - either entirely or for the group requested",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/getSupportersError"
                }
              }
            }
          },
          "503": {
            description: "System Unavailable Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/getSupportersError"
                }
              }
            }
          }
        }
      }
    },
    "/bounced_email": {
      post: {
        summary: "Updates the ramblers systems that an email address has bounced",
        operationId: "notifyBounce",
        description: "Notifies the main ramblers systems that an email has bounced\n",
        requestBody: {
          description: "Details about the record the bounce was from",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/bouncedEmail"
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateSuccess"
                }
              }
            }
          },
          "400": {
            description: "Bad request - typically missing fields",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "401": {
            description: "Unauthorised - either entirely or for the team requested",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "404": {
            description: "Not found - We can't any record of the supporter. They may have been deleted, anonymised or merged with another record",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "503": {
            description: "System unavailable",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          }
        }
      }
    },
    "/unsubscribe": {
      post: {
        summary: "Notifies us that a supporter has unsubscribed",
        description: "Handles updating the supporters consent\n",
        requestBody: {
          description: "Details about the unsubscribe request",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/unsubscribeRequest"
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Success!",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateSuccess"
                }
              }
            }
          },
          "400": {
            description: "Bad request. Typically missing fields",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "401": {
            description: "Unauthorised - either entirely or for the team requested",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "404": {
            description: "Not found - No record in the system of the supporter. Their record may have been deleted, merged or anonymised",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          },
          "503": {
            description: "System unavailable - Typically salesforce is being updated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/supporterUpdateError"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "query",
        name: "api_key"
      },
      TeamCodeAuth: {
        type: "apiKey",
        in: "query",
        name: "team_code"
      }
    },
    schemas: {
      supporterUpdateSuccess: {
        type: "object",
        properties: {
          responseText: {
            type: "string",
            enum: [
              "Update processed",
              "Bounce logged"
            ],
            example: "Update processed"
          }
        }
      },
      supporterUpdateError: {
        type: "object",
        description: "Note - Errors are not final",
        properties: {
          errorType: {
            type: "string",
            enum: [
              "Email not recognised for this group",
              "Invalid email",
              "System unavilable",
              "Required field missing"
            ],
            example: "Email not recognised for this group"
          },
          errorDescription: {
            type: "string",
            example: "No record of the supporter"
          }
        }
      },
      supporter: {
        type: "object",
        description: "Details about a supporter associated with a group",
        properties: {
          membershipNo: {
            type: "string",
            example: 1234567,
            nullable: true
          },
          memberRef: {
            type: "string",
            example: 1234567,
            nullable: false
          },
          contactId: {
            type: "string",
            example: "0033z000035G6MhAAK",
            nullable: false
          },
          title: {
            type: "string",
            example: "Mx",
            nullable: true
          },
          firstName: {
            type: "string",
            example: "Bob",
            nullable: true
          },
          lastName: {
            type: "string",
            example: "Smith",
            nullable: false
          },
          email: {
            type: "string",
            format: "email",
            example: "example@x.ramblers.org.uk",
            nullable: true
          },
          doNotEmail: {
            type: "boolean",
            example: true,
            nullable: false
          },
          landline: {
            type: "string",
            format: "phoneNumber",
            example: "0800 11 11 11",
            nullable: true
          },
          mobile: {
            type: "string",
            format: "phone number",
            example: "077333 3452333",
            nullable: true
          },
          friendlyName: {
            type: "string",
            example: "John",
            nullable: false
          },
          membershipStatus: {
            type: "string",
            nullable: true,
            enum: [
              "Active",
              "Payment pending",
              "Suspended",
              "Lapsed",
              "Inactive",
              "Resigned",
              null
            ],
            example: "Active"
          },
          memberType: {
            type: "string",
            nullable: true,
            enum: [
              "Corporate Membership",
              "Individual Life Membership",
              "Individual Membership",
              "Joint Life Membership",
              "Joint Membership",
              "Membership",
              null
            ]
          },
          membershipJoinDate: {
            type: "string",
            format: "date",
            example: "2024-03-01",
            nullable: true
          },
          membershipExpiry: {
            type: "string",
            format: "date",
            example: "2027-04-01",
            nullable: true
          },
          membershipEndDate: {
            type: "string",
            format: "date",
            example: "2028-07-01",
            nullable: true
          },
          teamStatus: {
            type: "string",
            nullable: false,
            description: "relationship between the team and the supporter. Could be replaced with an array of relationship values",
            enum: [
              "Member",
              "Affiliated",
              "Volunteer",
              "Wellbeing Walker"
            ]
          },
          teamRelationshipFrom: {
            type: "string",
            format: "date",
            example: "2021-02-01",
            nullable: true
          },
          wellbeingWalker: {
            type: "boolean",
            example: false,
            nullable: false
          },
          walkLeader: {
            type: "boolean",
            example: false,
            nullable: false,
            description: "Not necassarily with this team"
          },
          volunteerRoles: {
            type: "array",
            items: {
              $ref: "#/components/schemas/volunteerRole"
            },
            description: "Only contains volunteer roles for this team"
          },
          noWalkProgram: {
            type: "boolean",
            example: false,
            nullable: false
          },
          noCampaigning: {
            type: "boolean",
            example: true,
            nullable: false
          },
          noSurveys: {
            type: "boolean",
            example: false,
            nullable: false
          },
          canEmailVolunteers: {
            type: "boolean",
            example: true,
            nullable: false
          },
          canEmailMembers: {
            type: "boolean",
            example: false,
            nullable: false
          },
          canEmailWellbeingWalkers: {
            type: "boolean",
            example: false,
            nullable: false
          },
          canViewMemberData: {
            type: "boolean",
            example: true,
            nullable: false
          },
          canViewMemberDate: {
            type: "boolean",
            example: true,
            nullable: false
          },
          emailConsent: {
            type: "boolean",
            example: true,
            nullable: false
          },
          emailConsentLastUpdated: {
            type: "string",
            format: "date",
            example: "2001-01-03",
            nullable: true
          },
          postConsent: {
            type: "boolean",
            example: true,
            nullable: false
          },
          postConsentLastUpdated: {
            type: "string",
            format: "date",
            example: "2023-01-08",
            nullable: true
          },
          phoneConsent: {
            type: "boolean",
            example: true,
            nullable: false
          },
          phoneConsentLastUpdated: {
            type: "string",
            format: "date",
            example: "2024-04-08",
            nullable: true
          },
          emailConsentWellbeingWalks: {
            type: "boolean",
            example: false,
            nullable: false
          }
        }
      },
      volunteerRole: {
        type: "object",
        description: "Details about a particular role",
        properties: {
          roleName: {
            type: "string",
            nullable: false,
            example: "Walk Leader"
          },
          startDate: {
            type: "string",
            format: "date",
            nullable: false,
            example: "2024-05-17"
          },
          displayName: {
            type: "string",
            nullable: true,
            example: "Path Inspector"
          },
          walkLeaderStatus: {
            type: "string",
            nullable: true,
            example: "Not A Walk Leader"
          },
          wellbeingWalksRole: {
            type: "boolean",
            nullable: false,
            example: false
          }
        }
      },
      unsubscribeRequest: {
        description: "Details about the supporter who requested to unsubscribe",
        type: "object",
        properties: {
          emailAddress: {
            type: "string",
            format: "email",
            nullable: false,
            example: "example@x.ramblers.org.uk"
          },
          memberRef: {
            type: "string",
            nullable: false,
            example: 123435
          }
        }
      },
      bouncedEmail: {
        description: "details for handling a bounced email",
        type: "object",
        properties: {
          emailAddress: {
            type: "string",
            format: "email",
            nullable: false,
            example: "example@y.ramblers.org.uk"
          },
          memberRef: {
            type: "string",
            nullable: false,
            example: 12345456
          },
          bounceType: {
            type: "string",
            enum: [
              "Hard",
              "Soft"
            ],
            nullable: false,
            example: "Hard"
          }
        }
      },
      getSupportersError: {
        description: "Errors related to getSupporter endpoint - not final",
        type: "object",
        properties: {
          errorType: {
            type: "string",
            enum: [
              "Unauthorised",
              "Bad request",
              "System unavilable"
            ],
            example: "Unauthorised"
          },
          errorDescription: {
            type: "string",
            example: "No record of this group"
          }
        }
      }
    }
  },
  security: [
    {
      ApiKeyAuth: [],
      TeamCodeAuth: []
    }
  ]
};

// src/openapi.ts
function buildOpenApiDocument(options) {
  const document = upstream_default;
  return {
    ...document,
    ...options.info ? { info: options.info } : {},
    servers: [
      { url: options.publicBaseUrl, description: options.serverDescription ?? "Deployment" }
    ]
  };
}

// src/columns.ts
var INSIGHT_HUB_COLUMNS = [
  { header: "Group", apiKey: "groupName", parse: "string" },
  { header: "Mem No.", apiKey: "membershipNumber", parse: "string" },
  { header: "Member Type", apiKey: "memberType", parse: "string" },
  { header: "Member Term", apiKey: "memberTerm", parse: "memberTerm" },
  { header: "Member Status", apiKey: "memberStatus", parse: "string" },
  { header: "Type", apiKey: "membershipArrangement", parse: "string" },
  { header: "Joint With", apiKey: "jointWith", parse: "string" },
  { header: "Title", apiKey: "title", parse: "string" },
  { header: "Initials", apiKey: "initials", parse: "string" },
  { header: "Forenames", apiKey: "firstName", parse: "string" },
  { header: "Last Name", apiKey: "lastName", parse: "string" },
  { header: "Address1", apiKey: "address1", parse: "string" },
  { header: "Address2", apiKey: "address2", parse: "string" },
  { header: "Address3", apiKey: "address3", parse: "string" },
  { header: "Town", apiKey: "town", parse: "string" },
  { header: "County", apiKey: "county", parse: "string" },
  { header: "Country", apiKey: "country", parse: "string" },
  { header: "Postcode", apiKey: "postcode", parse: "string" },
  { header: "Email Address", apiKey: "email", parse: "string" },
  { header: "Landline Telephone", apiKey: "landlineTelephone", parse: "string" },
  { header: "Mobile Telephone", apiKey: "mobileNumber", parse: "string" },
  { header: "Expiry date", apiKey: "membershipExpiryDate", parse: "date" },
  { header: "Ramblers Join Date", apiKey: "ramblersJoinedDate", parse: "date" },
  { header: "Area", apiKey: "areaName", parse: "string" },
  { header: "Area Joined Date", apiKey: "areaJoinedDate", parse: "date" },
  { header: "Group Code", apiKey: "groupCode", parse: "string" },
  { header: "Group Joined Date", apiKey: "groupJoinedDate", parse: "date" },
  { header: "Volunteer", apiKey: "volunteer", parse: "boolean" },
  { header: "Email Marketing Consent", apiKey: "emailMarketingConsent", parse: "boolean" },
  { header: "Email Permission Last Updated", apiKey: "emailPermissionLastUpdated", parse: "date" },
  { header: "Post Direct Marketing", apiKey: "postDirectMarketing", parse: "boolean" },
  { header: "Post Permission Last Updated", apiKey: "postPermissionLastUpdated", parse: "date" },
  { header: "Telephone Direct Marketing", apiKey: "telephoneDirectMarketing", parse: "boolean" },
  { header: "Telephone Permission Last Updated", apiKey: "telephonePermissionLastUpdated", parse: "date" },
  { header: "Walk Programme Opt-Out", apiKey: "walkProgrammeOptOut", parse: "boolean" },
  { header: "Affiliate Member Primary Group", apiKey: "affiliateMemberPrimaryGroup", parse: "string" }
];
function normaliseHeader(raw) {
  return raw.trim().toLowerCase().replace(/\s+/g, " ");
}
var HEADER_LOOKUP = Object.fromEntries(
  INSIGHT_HUB_COLUMNS.map((c) => [normaliseHeader(c.header), c])
);
function findColumn(headerText) {
  return HEADER_LOOKUP[normaliseHeader(headerText)];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  INSIGHT_HUB_COLUMNS,
  STATUS_BY_SUPPORTERS_ERROR_TYPE,
  STATUS_BY_SUPPORTER_UPDATE_ERROR_TYPE,
  bouncedEmailRequestSchema,
  buildOpenApiDocument,
  findColumn,
  memberTypeSchema,
  membershipStatusSchema,
  normaliseHeader,
  supporterSchema,
  supporterUpdateErrorSchema,
  supporterUpdateSuccessSchema,
  supportersErrorSchema,
  supportersQuerySchema,
  supportersResponseSchema,
  teamStatusSchema,
  unsubscribeRequestSchema,
  volunteerRoleSchema
});
//# sourceMappingURL=index.cjs.map
