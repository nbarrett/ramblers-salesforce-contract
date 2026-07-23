export type MembershipStatus =
  | "Active"
  | "Payment pending"
  | "Suspended"
  | "Lapsed"
  | "Inactive"
  | "Resigned";

export type MemberType =
  | "Corporate Membership"
  | "Individual Life Membership"
  | "Individual Membership"
  | "Joint Life Membership"
  | "Joint Membership"
  | "Membership";

export type TeamStatus = "Member" | "Affiliated" | "Volunteer" | "Wellbeing Walker";

export type BounceType = "Hard" | "Soft";

export type SupporterUpdateResponseText = "Update processed" | "Bounce logged";

export type SupporterUpdateErrorType =
  | "Email not recognised for this group"
  | "Invalid email"
  | "System unavilable"
  | "Required field missing";

export type SupportersErrorType = "Unauthorised" | "Bad request" | "System unavilable";

export interface VolunteerRole {
  roleName: string;
  startDate: string;
  displayName: string | null;
  walkLeaderStatus: string | null;
  wellbeingWalksRole: boolean;
}

export interface Supporter {
  membershipNo: string | null;
  memberRef: string;
  contactId: string;
  title: string | null;
  firstName: string | null;
  lastName: string;
  email: string | null;
  doNotEmail: boolean;
  landline: string | null;
  mobile: string | null;
  friendlyName: string;
  membershipStatus: MembershipStatus | null;
  memberType: MemberType | null;
  membershipJoinDate: string | null;
  membershipExpiry: string | null;
  membershipEndDate: string | null;
  teamStatus: TeamStatus;
  teamRelationshipFrom: string | null;
  wellbeingWalker: boolean;
  walkLeader: boolean;
  volunteerRoles: VolunteerRole[];
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
}

export interface UnsubscribeRequest {
  emailAddress: string;
  memberRef: string;
}

export interface BouncedEmailRequest {
  emailAddress: string;
  memberRef: string;
  bounceType: BounceType;
}

export interface SupporterUpdateSuccess {
  responseText: SupporterUpdateResponseText;
}

export interface SupporterUpdateError {
  errorType: SupporterUpdateErrorType;
  errorDescription: string;
}

export interface SupportersError {
  errorType: SupportersErrorType;
  errorDescription: string;
}

export type TenantCode = string;

export interface OperatorRef {
  username: string;
}
