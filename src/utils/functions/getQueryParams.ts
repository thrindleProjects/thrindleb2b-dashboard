import type { ParsedUrlQuery } from 'querystring';

export function getQueryParams(query: string): ParsedUrlQuery {
  const urlSearchParams = Array.from(new URLSearchParams(query));
  const queryParams: ParsedUrlQuery = {};

  for (const [key, value] of urlSearchParams) {
    queryParams[key] = value;
  }

  return queryParams;
}
