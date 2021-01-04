import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/sessions/";

export function getSessions() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveSession(session) {
  console.log(session.session_id + " Din save session");
  return fetch(baseUrl + (session.session_id || ""), {
    method: session.session_id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(session),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSession(session_id) {
  return fetch(baseUrl + session_id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
