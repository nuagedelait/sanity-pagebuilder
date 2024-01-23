interface PathType {
    [key: string]: string | undefined
}

export function getPath(url: string): PathType {
    const result = new RegExp('http:\/\/([a-z]+\.)?([a-z]+)?(\.[a-z]{2,3})?(:[0-9]+)?\/([a-z]{2})\/(.*)').exec(url);
    const parsedResult = {
        match: undefined,
        subdomain: undefined,
        host: undefined,
        domain: undefined,
        port: undefined,
        lang: undefined,
        url: undefined
    }

    if (!result) {
        return parsedResult
    }

    let subdomain: string | undefined = result[1].replace('.','')
    let host: string | undefined = result[2];
    if (host === undefined) {
        host = result[1]
        subdomain = undefined;
    }

    return {
        ...parsedResult,
        match: result[0],
        subdomain,
        host,
        domain: result[3],
        port: result[4].replace(':',''),
        lang: result[5],
        url: result[6]
    }
}