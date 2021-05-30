interface ILinkProp {
    url: string
}

interface IMultiMediaProp {
    src: string,
    width: number,
    height: number
}

export interface IMoviewReviewType {
    display_title: string,
    byline: string,
    critics_pick: number,
    headline: string,
    opening_date: string,
    publication_date: string,
    summary_short: string,
    link: ILinkProp,
    multimedia: IMultiMediaProp,
    date_updated: string
}