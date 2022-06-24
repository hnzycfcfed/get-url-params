export as namespace GetUrlParams;

interface Params {
    [key: string]: string;
}

declare const getUrlParams: (url?: string) => Params;

export default getUrlParams;



