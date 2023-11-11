import sanityClient,{createClient} from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'nm35dlr9',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  create: true,
  token: 'skQP0gSE64h1pBRIJtgsHq0t97CrgeL3hs1NhnUZIhR78EbpOABCL5ov7KTLcRFvt4dVdKK307F7v52IGMN78hRzCfg8MjYaZvMIO4NqhpHqkmAJa5K6z6hYvHxOHyeGASD6ZorpcycEsl1TahKvHLNZALgU28Jkog05fqNAi3m2FZtattGk'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);