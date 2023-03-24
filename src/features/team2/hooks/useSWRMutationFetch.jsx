import { COOKIES_KEYS } from "data";
import { getCookie } from "lib/js-cookie";
import useSWRMutation from "swr/mutation";
import { getAuthorizationHeader } from "utils";

export const useSwrMutationFetch = (subUrl, options) => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "" + subUrl;
  const currentUser = getAuthorizationHeader();
  //   options.headers.Authorization = `Bearer ${currentUser.accessToken}`;

  async function fetcher(url, { arg }) {
    return fetch(url, {
      headers: {
        ...currentUser,
      },
      body: options.method.toLowerCase() != "delete" ? JSON.stringify(arg) : {},
    }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation(url, fetcher);
  return { trigger, isMutating, data, error };
};

export default useSwrMutationFetch;
