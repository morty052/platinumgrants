import sanityClient, { createClient } from "@sanity/client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "cefcmccg",
  dataset: "production",
  apiVersion: "1",
  useCdn: false,
  create: true,
  token:
    "skSo3LUQu2pHWoCAX0CUfuYhNN8xtn2R0SJur13kj7Ukcmx5jwxB95xqCmq1wJ3koLXN0PHbRYa5Gcc5YevhhBK7gHUsQnfD2ZVYKGdmcochdXyEOophQhMlMsw5EpJ34Jr6DYArUYXAXP51uhobdtcAWa7KS4nzaMKoBwuY2OYOPPTcA22B",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
