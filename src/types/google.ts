import { Type, Static } from "@sinclair/typebox";

const googleUserProfile = Type.Object({
    googleId: Type.String(),
    imageUrl: Type.String(),
    email: Type.String(),
    name: Type.String(),
    givenName: Type.String(),
    familyName: Type.String(),
});

type GoogleUserProfileType = Static<typeof googleUserProfile>;

export {
    googleUserProfile
}
export type {
    GoogleUserProfileType
}