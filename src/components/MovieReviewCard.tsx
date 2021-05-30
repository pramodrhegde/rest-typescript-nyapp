import React, { ReactElement } from 'react';
import {Months} from '../constants/Constants';
import {IMoviewReviewType} from '../types/Types';

// interface IGetDateString {
//     (str: string): string
// }

// const getDateString: IGetDateString = (str) => {
//     const temp: string[] = str.split('-');

//     return `${Months[temp[1]]} ${temp[0]}`;
// }

const MovieReviewCard = (props: IMoviewReviewType): ReactElement => {
    const {display_title, byline, critics_pick, headline, link, multimedia, opening_date, publication_date, summary_short} = props;

    const opening = opening_date.split('-');
    const published = publication_date.split('-');

    return <div>
        <p>{display_title}</p>
        <p>{byline}</p>
        <p>{critics_pick ? 'Yes' : 'No'}</p>
        <p>{headline}</p>
        <p>{link.url}</p>
        <p><img src={multimedia.src} width={multimedia.width} height={multimedia.height}/></p>
        <p>{`Opening: ${Months[opening[1]]} ${opening[0]}`}</p>
        <p>{`Published: ${Months[published[1]]} ${published[0]}`}</p>
        <p>{summary_short}</p>
    </div>
};

export default MovieReviewCard;