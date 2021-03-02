import Prismic from "prismic-javascript";

const REPOSITORY = "louierichardson";
export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;

export const client = Prismic.client(API_URL);
