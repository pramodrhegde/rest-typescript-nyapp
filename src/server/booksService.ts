interface IFetchBooksList {
    (): Promise<any>
}

export const fetchBooksList: IFetchBooksList = () => {
    const API_ENDPOINT = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7ZmSpCr65hvu9hemnensEwqSico2b6B3';
    
    return fetch(API_ENDPOINT).then((res) => {
        return res.json();
    }).catch(err => {
        return Promise.reject(err);
    })
};

interface IFetchBooksFromList {
    (list: string, offset?: number): Promise<any>
}

export const fetchBooksFromList: IFetchBooksFromList = (list, offset) => {
    const API_ENDPOINT = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=7ZmSpCr65hvu9hemnensEwqSico2b6B3';
    
    return fetch(`${API_ENDPOINT}&list=${list}&offset=${offset ? offset : 0}`).then((res) => {
        return res.json();
    }).catch(err => {
        return Promise.reject(err);
    })
}