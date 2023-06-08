import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: null | string;
      company: Record<string, unknown>;
      type: 'admin';
    };
  }

  interface User {
    token: string;
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: null | string;
    company: Record<string, unknown>;
    type: 'admin';
  }
}

declare module 'next-auth/jwt' {
  //   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    user: {
      token: string;
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: null | string;
      company: Record<string, unknown>;
      type: 'admin';
    };
  }
}

/**
 {
  token: {
    name: undefined,
    email: 'louisshaw75@gmail.com',
    picture: undefined,
    sub: '374648a8-eef4-4573-a38c-053386ebb292'
  },
  user: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzQ2NDhhOC1lZWY0LTQ1NzMtYTM4Yy0wNTMzODZlYmIyOTIiLCJjb21wYW55SWQiOiJzdXBlcmFkbWluIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjg1NzUwMzEzLCJleHAiOjE2ODU4MzY3MTN9.YOCWpnoSlOKL0SlKDMBHCWKoz-8Z8GCy4noHXSCKbBw',
    id: '374648a8-eef4-4573-a38c-053386ebb292',
    email: 'louisshaw75@gmail.com',
    firstName: 'Super',
    lastName: 'Admin',
    phone: null,
    company: {},
    type: 'admin'
  }
}
{
  token: {
    email: 'louisshaw75@gmail.com',
    sub: '374648a8-eef4-4573-a38c-053386ebb292',
    user: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzQ2NDhhOC1lZWY0LTQ1NzMtYTM4Yy0wNTMzODZlYmIyOTIiLCJjb21wYW55SWQiOiJzdXBlcmFkbWluIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjg1NzUwMzEzLCJleHAiOjE2ODU4MzY3MTN9.YOCWpnoSlOKL0SlKDMBHCWKoz-8Z8GCy4noHXSCKbBw',
      id: '374648a8-eef4-4573-a38c-053386ebb292',
      email: 'louisshaw75@gmail.com',
      firstName: 'Super',
      lastName: 'Admin',
      phone: null,
      company: {},
      type: 'admin'
    },
    iat: 1685750312,
    exp: 1688342312,
    jti: '25405d31-22ee-405a-80a1-9f14d9cbbef0'
  },
  user: undefined
}
{
  session: {
    user: {
      name: undefined,
      email: 'louisshaw75@gmail.com',
      image: undefined
    },
    expires: '2023-07-02T23:58:32.787Z'
  },
  token: {
    email: 'louisshaw75@gmail.com',
    sub: '374648a8-eef4-4573-a38c-053386ebb292',
    user: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzQ2NDhhOC1lZWY0LTQ1NzMtYTM4Yy0wNTMzODZlYmIyOTIiLCJjb21wYW55SWQiOiJzdXBlcmFkbWluIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjg1NzUwMzEzLCJleHAiOjE2ODU4MzY3MTN9.YOCWpnoSlOKL0SlKDMBHCWKoz-8Z8GCy4noHXSCKbBw',
      id: '374648a8-eef4-4573-a38c-053386ebb292',
      email: 'louisshaw75@gmail.com',
      firstName: 'Super',
      lastName: 'Admin',
      phone: null,
      company: {},
      type: 'admin'
    },
    iat: 1685750312,
    exp: 1688342312,
    jti: '25405d31-22ee-405a-80a1-9f14d9cbbef0'
  }
}
 */
