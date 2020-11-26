import Url from 'url';
import getUrlWithParamsConfig from "../utils/getUrlWithParamsConfig";

async function req<T>(endpoint: string, query: object):Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

    return await fetch(uri).then((res) => res.json());
}

export default req;