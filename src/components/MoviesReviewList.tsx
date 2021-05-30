import React, { ReactElement, useEffect, useState } from 'react';
import {fetchMovieReviews, ReviewTypeEnum, OrderTypeEnum} from '../server/movieReviewsService';
import MovieReviewCard from './MovieReviewCard';
import {IMoviewReviewType} from '../types/Types';

const MoviesReviewList = (): ReactElement => {
    const [reviewList, setReviewsList] = useState([]);
    const [reviewsType, setReviewsType] = useState<ReviewTypeEnum>(ReviewTypeEnum.ALL);
    const [reviewsOrderType, setReviewsOrderType] = useState<OrderTypeEnum>(OrderTypeEnum.BY_OPENING_TYPE);

    const handleReviewTypeChange = (e) => {
        setReviewsType(e.target.value);
    };

    const hanldeReviewOrderType = (e) => {
        setReviewsOrderType(e.target.value);
    };

    useEffect(() => {
        fetchMovieReviews(reviewsType, reviewsOrderType).then(res => {
            console.log(res);
            setReviewsList(res.results);
        }).catch(err => {
            console.log(err);
            setReviewsList([]);
        });
    }, [reviewsType, reviewsOrderType]);


    return <div>
        <p>Newyork times movie reviews</p>
        <select name="reviews-type" defaultValue={ReviewTypeEnum.ALL} onChange={handleReviewTypeChange}>
            <option value={ReviewTypeEnum.ALL}>{ReviewTypeEnum.ALL}</option>
            <option value={ReviewTypeEnum.PICK}>{ReviewTypeEnum.PICK}</option>
        </select>

        <select name="reviews-order-type" defaultValue={OrderTypeEnum.BY_OPENING_TYPE} onChange={hanldeReviewOrderType}>
            <option value={OrderTypeEnum.ALL}>{OrderTypeEnum.ALL}</option>
            <option value={OrderTypeEnum.BY_OPENING_TYPE}>{OrderTypeEnum.BY_OPENING_TYPE}</option>
            <option value={OrderTypeEnum.BY_PUBLICATION_DATE}>{OrderTypeEnum.BY_PUBLICATION_DATE}</option>
        </select>
        {
            reviewList.map((review: IMoviewReviewType) => <MovieReviewCard key={`${review.date_updated}_${review.display_title}`} {...review}/>)
        }
    </div>;
};

export default MoviesReviewList;