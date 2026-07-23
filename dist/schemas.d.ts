import { z } from "zod";
export declare const membershipStatusSchema: z.ZodEnum<["Active", "Payment pending", "Suspended", "Lapsed", "Inactive", "Resigned"]>;
export declare const memberTypeSchema: z.ZodEnum<["Corporate Membership", "Individual Life Membership", "Individual Membership", "Joint Life Membership", "Joint Membership", "Membership"]>;
export declare const teamStatusSchema: z.ZodEnum<["Member", "Affiliated", "Volunteer", "Wellbeing Walker"]>;
export declare const volunteerRoleSchema: z.ZodObject<{
    roleName: z.ZodString;
    startDate: z.ZodString;
    displayName: z.ZodNullable<z.ZodString>;
    walkLeaderStatus: z.ZodNullable<z.ZodString>;
    wellbeingWalksRole: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    roleName: string;
    startDate: string;
    displayName: string | null;
    walkLeaderStatus: string | null;
    wellbeingWalksRole: boolean;
}, {
    roleName: string;
    startDate: string;
    displayName: string | null;
    walkLeaderStatus: string | null;
    wellbeingWalksRole: boolean;
}>;
export declare const supporterSchema: z.ZodObject<{
    membershipNo: z.ZodNullable<z.ZodString>;
    memberRef: z.ZodString;
    contactId: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    firstName: z.ZodNullable<z.ZodString>;
    lastName: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    doNotEmail: z.ZodBoolean;
    landline: z.ZodNullable<z.ZodString>;
    mobile: z.ZodNullable<z.ZodString>;
    friendlyName: z.ZodString;
    membershipStatus: z.ZodNullable<z.ZodEnum<["Active", "Payment pending", "Suspended", "Lapsed", "Inactive", "Resigned"]>>;
    memberType: z.ZodNullable<z.ZodEnum<["Corporate Membership", "Individual Life Membership", "Individual Membership", "Joint Life Membership", "Joint Membership", "Membership"]>>;
    membershipJoinDate: z.ZodNullable<z.ZodString>;
    membershipExpiry: z.ZodNullable<z.ZodString>;
    membershipEndDate: z.ZodNullable<z.ZodString>;
    teamStatus: z.ZodEnum<["Member", "Affiliated", "Volunteer", "Wellbeing Walker"]>;
    teamRelationshipFrom: z.ZodNullable<z.ZodString>;
    wellbeingWalker: z.ZodBoolean;
    walkLeader: z.ZodBoolean;
    volunteerRoles: z.ZodArray<z.ZodObject<{
        roleName: z.ZodString;
        startDate: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        walkLeaderStatus: z.ZodNullable<z.ZodString>;
        wellbeingWalksRole: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }, {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }>, "many">;
    noWalkProgram: z.ZodBoolean;
    noCampaigning: z.ZodBoolean;
    noSurveys: z.ZodBoolean;
    canEmailVolunteers: z.ZodBoolean;
    canEmailMembers: z.ZodBoolean;
    canEmailWellbeingWalkers: z.ZodBoolean;
    canViewMemberData: z.ZodBoolean;
    canViewMemberDate: z.ZodBoolean;
    emailConsent: z.ZodBoolean;
    emailConsentLastUpdated: z.ZodNullable<z.ZodString>;
    postConsent: z.ZodBoolean;
    postConsentLastUpdated: z.ZodNullable<z.ZodString>;
    phoneConsent: z.ZodBoolean;
    phoneConsentLastUpdated: z.ZodNullable<z.ZodString>;
    emailConsentWellbeingWalks: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    memberType: "Corporate Membership" | "Individual Life Membership" | "Individual Membership" | "Joint Life Membership" | "Joint Membership" | "Membership" | null;
    title: string | null;
    firstName: string | null;
    lastName: string;
    email: string | null;
    membershipNo: string | null;
    memberRef: string;
    contactId: string;
    doNotEmail: boolean;
    landline: string | null;
    mobile: string | null;
    friendlyName: string;
    membershipStatus: "Active" | "Payment pending" | "Suspended" | "Lapsed" | "Inactive" | "Resigned" | null;
    membershipJoinDate: string | null;
    membershipExpiry: string | null;
    membershipEndDate: string | null;
    teamStatus: "Volunteer" | "Member" | "Affiliated" | "Wellbeing Walker";
    teamRelationshipFrom: string | null;
    wellbeingWalker: boolean;
    walkLeader: boolean;
    volunteerRoles: {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }[];
    noWalkProgram: boolean;
    noCampaigning: boolean;
    noSurveys: boolean;
    canEmailVolunteers: boolean;
    canEmailMembers: boolean;
    canEmailWellbeingWalkers: boolean;
    canViewMemberData: boolean;
    canViewMemberDate: boolean;
    emailConsent: boolean;
    emailConsentLastUpdated: string | null;
    postConsent: boolean;
    postConsentLastUpdated: string | null;
    phoneConsent: boolean;
    phoneConsentLastUpdated: string | null;
    emailConsentWellbeingWalks: boolean;
}, {
    memberType: "Corporate Membership" | "Individual Life Membership" | "Individual Membership" | "Joint Life Membership" | "Joint Membership" | "Membership" | null;
    title: string | null;
    firstName: string | null;
    lastName: string;
    email: string | null;
    membershipNo: string | null;
    memberRef: string;
    contactId: string;
    doNotEmail: boolean;
    landline: string | null;
    mobile: string | null;
    friendlyName: string;
    membershipStatus: "Active" | "Payment pending" | "Suspended" | "Lapsed" | "Inactive" | "Resigned" | null;
    membershipJoinDate: string | null;
    membershipExpiry: string | null;
    membershipEndDate: string | null;
    teamStatus: "Volunteer" | "Member" | "Affiliated" | "Wellbeing Walker";
    teamRelationshipFrom: string | null;
    wellbeingWalker: boolean;
    walkLeader: boolean;
    volunteerRoles: {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }[];
    noWalkProgram: boolean;
    noCampaigning: boolean;
    noSurveys: boolean;
    canEmailVolunteers: boolean;
    canEmailMembers: boolean;
    canEmailWellbeingWalkers: boolean;
    canViewMemberData: boolean;
    canViewMemberDate: boolean;
    emailConsent: boolean;
    emailConsentLastUpdated: string | null;
    postConsent: boolean;
    postConsentLastUpdated: string | null;
    phoneConsent: boolean;
    phoneConsentLastUpdated: string | null;
    emailConsentWellbeingWalks: boolean;
}>;
export declare const supportersResponseSchema: z.ZodArray<z.ZodObject<{
    membershipNo: z.ZodNullable<z.ZodString>;
    memberRef: z.ZodString;
    contactId: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    firstName: z.ZodNullable<z.ZodString>;
    lastName: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    doNotEmail: z.ZodBoolean;
    landline: z.ZodNullable<z.ZodString>;
    mobile: z.ZodNullable<z.ZodString>;
    friendlyName: z.ZodString;
    membershipStatus: z.ZodNullable<z.ZodEnum<["Active", "Payment pending", "Suspended", "Lapsed", "Inactive", "Resigned"]>>;
    memberType: z.ZodNullable<z.ZodEnum<["Corporate Membership", "Individual Life Membership", "Individual Membership", "Joint Life Membership", "Joint Membership", "Membership"]>>;
    membershipJoinDate: z.ZodNullable<z.ZodString>;
    membershipExpiry: z.ZodNullable<z.ZodString>;
    membershipEndDate: z.ZodNullable<z.ZodString>;
    teamStatus: z.ZodEnum<["Member", "Affiliated", "Volunteer", "Wellbeing Walker"]>;
    teamRelationshipFrom: z.ZodNullable<z.ZodString>;
    wellbeingWalker: z.ZodBoolean;
    walkLeader: z.ZodBoolean;
    volunteerRoles: z.ZodArray<z.ZodObject<{
        roleName: z.ZodString;
        startDate: z.ZodString;
        displayName: z.ZodNullable<z.ZodString>;
        walkLeaderStatus: z.ZodNullable<z.ZodString>;
        wellbeingWalksRole: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }, {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }>, "many">;
    noWalkProgram: z.ZodBoolean;
    noCampaigning: z.ZodBoolean;
    noSurveys: z.ZodBoolean;
    canEmailVolunteers: z.ZodBoolean;
    canEmailMembers: z.ZodBoolean;
    canEmailWellbeingWalkers: z.ZodBoolean;
    canViewMemberData: z.ZodBoolean;
    canViewMemberDate: z.ZodBoolean;
    emailConsent: z.ZodBoolean;
    emailConsentLastUpdated: z.ZodNullable<z.ZodString>;
    postConsent: z.ZodBoolean;
    postConsentLastUpdated: z.ZodNullable<z.ZodString>;
    phoneConsent: z.ZodBoolean;
    phoneConsentLastUpdated: z.ZodNullable<z.ZodString>;
    emailConsentWellbeingWalks: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    memberType: "Corporate Membership" | "Individual Life Membership" | "Individual Membership" | "Joint Life Membership" | "Joint Membership" | "Membership" | null;
    title: string | null;
    firstName: string | null;
    lastName: string;
    email: string | null;
    membershipNo: string | null;
    memberRef: string;
    contactId: string;
    doNotEmail: boolean;
    landline: string | null;
    mobile: string | null;
    friendlyName: string;
    membershipStatus: "Active" | "Payment pending" | "Suspended" | "Lapsed" | "Inactive" | "Resigned" | null;
    membershipJoinDate: string | null;
    membershipExpiry: string | null;
    membershipEndDate: string | null;
    teamStatus: "Volunteer" | "Member" | "Affiliated" | "Wellbeing Walker";
    teamRelationshipFrom: string | null;
    wellbeingWalker: boolean;
    walkLeader: boolean;
    volunteerRoles: {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }[];
    noWalkProgram: boolean;
    noCampaigning: boolean;
    noSurveys: boolean;
    canEmailVolunteers: boolean;
    canEmailMembers: boolean;
    canEmailWellbeingWalkers: boolean;
    canViewMemberData: boolean;
    canViewMemberDate: boolean;
    emailConsent: boolean;
    emailConsentLastUpdated: string | null;
    postConsent: boolean;
    postConsentLastUpdated: string | null;
    phoneConsent: boolean;
    phoneConsentLastUpdated: string | null;
    emailConsentWellbeingWalks: boolean;
}, {
    memberType: "Corporate Membership" | "Individual Life Membership" | "Individual Membership" | "Joint Life Membership" | "Joint Membership" | "Membership" | null;
    title: string | null;
    firstName: string | null;
    lastName: string;
    email: string | null;
    membershipNo: string | null;
    memberRef: string;
    contactId: string;
    doNotEmail: boolean;
    landline: string | null;
    mobile: string | null;
    friendlyName: string;
    membershipStatus: "Active" | "Payment pending" | "Suspended" | "Lapsed" | "Inactive" | "Resigned" | null;
    membershipJoinDate: string | null;
    membershipExpiry: string | null;
    membershipEndDate: string | null;
    teamStatus: "Volunteer" | "Member" | "Affiliated" | "Wellbeing Walker";
    teamRelationshipFrom: string | null;
    wellbeingWalker: boolean;
    walkLeader: boolean;
    volunteerRoles: {
        roleName: string;
        startDate: string;
        displayName: string | null;
        walkLeaderStatus: string | null;
        wellbeingWalksRole: boolean;
    }[];
    noWalkProgram: boolean;
    noCampaigning: boolean;
    noSurveys: boolean;
    canEmailVolunteers: boolean;
    canEmailMembers: boolean;
    canEmailWellbeingWalkers: boolean;
    canViewMemberData: boolean;
    canViewMemberDate: boolean;
    emailConsent: boolean;
    emailConsentLastUpdated: string | null;
    postConsent: boolean;
    postConsentLastUpdated: string | null;
    phoneConsent: boolean;
    phoneConsentLastUpdated: string | null;
    emailConsentWellbeingWalks: boolean;
}>, "many">;
export declare const supportersErrorSchema: z.ZodObject<{
    errorType: z.ZodEnum<["Unauthorised", "Bad request", "System unavilable"]>;
    errorDescription: z.ZodString;
}, "strip", z.ZodTypeAny, {
    errorType: "System unavilable" | "Unauthorised" | "Bad request";
    errorDescription: string;
}, {
    errorType: "System unavilable" | "Unauthorised" | "Bad request";
    errorDescription: string;
}>;
export declare const supporterUpdateSuccessSchema: z.ZodObject<{
    responseText: z.ZodEnum<["Update processed", "Bounce logged"]>;
}, "strip", z.ZodTypeAny, {
    responseText: "Update processed" | "Bounce logged";
}, {
    responseText: "Update processed" | "Bounce logged";
}>;
export declare const supporterUpdateErrorSchema: z.ZodObject<{
    errorType: z.ZodEnum<["Email not recognised for this group", "Invalid email", "System unavilable", "Required field missing"]>;
    errorDescription: z.ZodString;
}, "strip", z.ZodTypeAny, {
    errorType: "Email not recognised for this group" | "Invalid email" | "System unavilable" | "Required field missing";
    errorDescription: string;
}, {
    errorType: "Email not recognised for this group" | "Invalid email" | "System unavilable" | "Required field missing";
    errorDescription: string;
}>;
export declare const supportersQuerySchema: z.ZodObject<{
    api_key: z.ZodString;
    team_code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    api_key: string;
    team_code: string;
}, {
    api_key: string;
    team_code: string;
}>;
export declare const unsubscribeRequestSchema: z.ZodObject<{
    emailAddress: z.ZodString;
    memberRef: z.ZodString;
}, "strip", z.ZodTypeAny, {
    memberRef: string;
    emailAddress: string;
}, {
    memberRef: string;
    emailAddress: string;
}>;
export declare const bouncedEmailRequestSchema: z.ZodObject<{
    emailAddress: z.ZodString;
    memberRef: z.ZodString;
    bounceType: z.ZodEnum<["Hard", "Soft"]>;
}, "strip", z.ZodTypeAny, {
    memberRef: string;
    emailAddress: string;
    bounceType: "Hard" | "Soft";
}, {
    memberRef: string;
    emailAddress: string;
    bounceType: "Hard" | "Soft";
}>;
//# sourceMappingURL=schemas.d.ts.map