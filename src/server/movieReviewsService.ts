export enum ReviewTypeEnum {
    ALL = 'all',
    PICK = 'picks'
}

export enum OrderTypeEnum {
    ALL = 'all',
    BY_OPENING_TYPE = 'by-opening-date',
    BY_PUBLICATION_DATE = 'by-publication-date'
}

interface IFetchMovieReviews {
    (type: ReviewTypeEnum, order: OrderTypeEnum): Promise<any>
}

export const fetchMovieReviews: IFetchMovieReviews = (type, order) => {
    const API_ENDPOINT = `https://api.nytimes.com/svc/movies/v2/reviews/${type}.json?order=${order != OrderTypeEnum.ALL? order: ''}&api-key=7ZmSpCr65hvu9hemnensEwqSico2b6B3`;
    
    return fetch(API_ENDPOINT).then((res) => {
        return res.json();
    }).catch(err => {
        return Promise.reject(err);
    })
}