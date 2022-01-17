import { endpoints } from "./endpoints";

interface fetchBodyType {
  query: string;
  variables?: object;
}

export const sendQuery = ({ query, variables }: fetchBodyType):any => {
  return new Promise((resolve, reject) => {
    fetch(endpoints.GRAPHQL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify({ query, variables }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          reject(res.errors);
        } else {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}