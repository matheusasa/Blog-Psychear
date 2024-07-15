import Router from 'next/router';

import { IncomingMessage } from 'http';
import { fetcher } from './api';
import Cookies from 'js-cookie';

interface User {
    id: string;
    username: string;
  }
  
  interface AuthData {
    user: User;
    jwt: string;
  }
  
  interface FetcherResponse {
    id: string;
    username: string;
  }

  export const unsetToken = (): void => {
    if (typeof window === 'undefined') {
      return;
    }
    Cookies.remove('id');
    Cookies.remove('jwt');
    Cookies.remove('username');
  
    Router.reload();
  };
  
  export const setToken = (data: AuthData): void => {
    if (typeof window === 'undefined') {
      return;
    }
    Cookies.set('id', data.user.id);
    Cookies.set('username', data.user.username);
    Cookies.set('jwt', data.jwt);
  
    if (Cookies.get('username')) {
      Router.reload();
    }
  };

  export const getUserFromLocalCookie = async (): Promise<string | undefined> => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
      try {
        const data = await fetcher<FetcherResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
        return data.username;
      } catch (error) {
        console.error(error);
        return undefined;
      }
    }
    return undefined;
  };

  export const getIdFromLocalCookie = async (): Promise<string | undefined> => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
      try {
        const data = await fetcher<FetcherResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
        return data.id;
      } catch (error) {
        console.error(error);
        return undefined;
      }
    }
    return undefined;
  };

  export const getTokenFromLocalCookie = (): string | undefined => {
    return Cookies.get('jwt');
  };

  export const getTokenFromServerCookie = (req: IncomingMessage): string | undefined => {
    if (!req.headers.cookie) {
      return undefined;
    }
    const jwtCookie = req.headers.cookie
      .split(';')
      .find((c) => c.trim().startsWith('jwt='));
    if (!jwtCookie) {
      return undefined;
    }
    const jwt = jwtCookie.split('=')[1];
    return jwt;
  };

  export const getIdFromServerCookie = (req: IncomingMessage): string | undefined => {
    if (!req.headers.cookie) {
      return undefined;
    }
    const idCookie = req.headers.cookie
      .split(';')
      .find((c) => c.trim().startsWith('id='));
    if (!idCookie) {
      return undefined;
    }
    const id = idCookie.split('=')[1];
    return id;
  };
  