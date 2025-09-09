import { z } from "zod";

export const inviteMemberBody = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["owner", "admin", "member"]),
});
export type InviteMemberBody = z.infer<typeof inviteMemberBody>;
