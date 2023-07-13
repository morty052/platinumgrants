import sanityClient,{createClient} from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'y9udhrap',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  create: true,
  token: 'skcEjaO1FUNIbPrflxIvs9YjkosrWDtmyMcSklCjiqG5uDLdopOLjU8Z0rTNDhTzUzK7w7l2IvcIQrg6yQfTdfT3ifoHwdCH1Ssp0JfqjFJ6xi2FG55Ms1da7hFOGGLSMgeEt3j2QScQeOKL4RRHA7OwEyuofgVva0Wqhkoa4GYyDCVpoHID'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);