import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/speakers/";

export function getSpeakers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveSpeaker(speaker) {
  return fetch(baseUrl + (speaker.id || ""), {
    method: speaker.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(speaker),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSpeaker(speakerId) {
  return fetch(baseUrl + speakerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
