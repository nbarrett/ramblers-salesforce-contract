import { z } from "zod";

export const membershipStatusSchema = z.enum([
  "Active",
  "Payment pending",
  "Suspended",
  "Lapsed",
  "Inactive",
  "Resigned",
]);

export const memberTypeSchema = z.enum([
  "Corporate Membership",
  "Individual Life Membership",
  "Individual Membership",
  "Joint Life Membership",
  "Joint Membership",
  "Membership",
]);

export const teamStatusSchema = z.enum([
  "Member",
  "Affiliated",
  "Volunteer",
  "Wellbeing Walker",
]);

export const volunteerRoleSchema = z.object({
  roleName: z.string(),
  startDate: z.string().date(),
  displayName: z.string().nullable(),
  walkLeaderStatus: z.string().nullable(),
  wellbeingWalksRole: z.boolean(),
});

export const supporterSchema = z.object({
  membershipNo: z.string().nullable(),
  memberRef: z.string(),
  contactId: z.string(),
  title: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string(),
  email: z.string().email().nullable(),
  doNotEmail: z.boolean(),
  landline: z.string().nullable(),
  mobile: z.string().nullable(),
  friendlyName: z.string(),
  membershipStatus: membershipStatusSchema.nullable(),
  memberType: memberTypeSchema.nullable(),
  membershipJoinDate: z.string().date().nullable(),
  membershipExpiry: z.string().date().nullable(),
  membershipEndDate: z.string().date().nullable(),
  teamStatus: teamStatusSchema,
  teamRelationshipFrom: z.string().date().nullable(),
  wellbeingWalker: z.boolean(),
  walkLeader: z.boolean(),
  volunteerRoles: z.array(volunteerRoleSchema),
  noWalkProgram: z.boolean(),
  noCampaigning: z.boolean(),
  noSurveys: z.boolean(),
  canEmailVolunteers: z.boolean(),
  canEmailMembers: z.boolean(),
  canEmailWellbeingWalkers: z.boolean(),
  canViewMemberData: z.boolean(),
  canViewMemberDate: z.boolean(),
  emailConsent: z.boolean(),
  emailConsentLastUpdated: z.string().date().nullable(),
  postConsent: z.boolean(),
  postConsentLastUpdated: z.string().date().nullable(),
  phoneConsent: z.boolean(),
  phoneConsentLastUpdated: z.string().date().nullable(),
  emailConsentWellbeingWalks: z.boolean(),
});

export const supportersResponseSchema = z.array(supporterSchema);

export const supportersErrorSchema = z.object({
  errorType: z.enum(["Unauthorised", "Bad request", "System unavilable"]),
  errorDescription: z.string(),
});

export const supporterUpdateSuccessSchema = z.object({
  responseText: z.enum(["Update processed", "Bounce logged"]),
});

export const supporterUpdateErrorSchema = z.object({
  errorType: z.enum([
    "Email not recognised for this group",
    "Invalid email",
    "System unavilable",
    "Required field missing",
  ]),
  errorDescription: z.string(),
});

export const supportersQuerySchema = z.object({
  api_key: z.string().min(1),
  team_code: z.string().min(1),
});

export const unsubscribeRequestSchema = z.object({
  emailAddress: z.string().email(),
  memberRef: z.string().min(1),
});

export const bouncedEmailRequestSchema = z.object({
  emailAddress: z.string().email(),
  memberRef: z.string().min(1),
  bounceType: z.enum(["Hard", "Soft"]),
});
