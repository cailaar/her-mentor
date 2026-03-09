export interface Mentor {
  name: string;
  initials: string;
  title: string;
  experience: string;
  skills: string[];
  style: string;
  matchScore: number;
}

export type PageName =
  | "login"
  | "role"
  | "profile"
  | "survey"
  | "matches"
  | "success";
