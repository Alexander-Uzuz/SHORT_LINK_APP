export const BASE_URL = "http://79.143.31.216";

interface IBaseRequest {
  url: string;
  method: "POST" | "GET" | "PUSH" | "DELETE";
  headers?: {
    "Content-Type"?: string;
    Authorization?: string;
  };
  body?: string;
}

export const baseRequest = async ({ url, ...props }: IBaseRequest) => {
  return await fetch(BASE_URL + url, { ...props });
};

const request = async (
  url: string,
  data: { method: string; body?: string; token?: string }
) => {
  const headersToken = data.token ? { Authorization: `Bearer ${data.token}` } : "";
  const headersMultiPart =
    typeof data.body === "string"
      ? {
          "Content-Type": "application/x-www-form-urlencoded",
          "accept": "application/json",
        }
      : "";

  const response = await fetch(url, {
    headers: {
      ...headersToken,
      ...headersMultiPart,
    },
    ...data
  });
  if (response.ok) {
    if (response.headers.get("Content-Length") === "0") {
      return true;
    }
    return await response.json();
  } else {
    if (response.status === 400) {
      throw new Error(`Error 400`);
    }
    if (response.status === 422) throw new Error("Error 422");
    else throw { response: response };
  }
};

export const post = (url: string, body?: string) => {
  return request(`${BASE_URL}${url}`, { method: "POST", body });
};

// export const get = (url: string, token: string) => request(`${BASE_URL}${url}`, {method: "GET"})

