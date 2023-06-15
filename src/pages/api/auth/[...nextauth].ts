import axios from 'axios';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

import logger from '@/lib/logger';

import { INetworkSuccessResponse } from '@/@types';
import { UserLoginResponse } from '@/api/auth/types';
import { LOGIN_USER_PATH } from '@/constant';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Login Form',
      id: 'login',
      credentials: {
        email: {
          label: 'email',
          type: 'string',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const data: {
            email: string;
            password: string;
          } = {
            email: credentials?.email as string,
            password: credentials?.password as string,
          };
          const user = await axios.post<
            INetworkSuccessResponse<UserLoginResponse>
          >(
            String(`${process.env.NEXT_PUBLIC_DEV_URL}${LOGIN_USER_PATH}`),
            data
          );

          if (user.data.data.type !== 'admin') {
            throw new Error('Not an admin');
          }

          return user.data.data;
        } catch (error) {
          // handle errors here
          logger(error);
          return null;
        }
      },
    }),
  ],
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      const {
        user: { token: bearer, ...rest },
      } = token;
      session.token = bearer;
      session.user = rest;
      return session;
    },
  },
  pages: {
    error: '/login',
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 330 days
  },
};

export default NextAuth(authOptions);
