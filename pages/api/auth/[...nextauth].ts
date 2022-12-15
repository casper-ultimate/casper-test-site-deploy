import NextAuth, { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains

    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID??'',
      clientSecret: process.env.FACEBOOK_SECRET??'',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID??'',
      clientSecret: process.env.GITHUB_SECRET??'',
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID??'',
      clientSecret: process.env.GOOGLE_SECRET??'',
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID??'',
      clientSecret: process.env.TWITTER_SECRET??'',
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID??'',
      clientSecret: process.env.AUTH0_SECRET??'',
      issuer: process.env.AUTH0_ISSUER??'',
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },  
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //Optional emulator config (see below for options)
    },
    )
}

export default NextAuth(authOptions)
