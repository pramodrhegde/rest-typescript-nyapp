import React from 'react';

const BooksCard = (props) => {
    const {amazon_product_url, rank, rank_last_week, book_details, reviews} = props;

    return <div>
        {
            book_details && book_details.map(({
                title,
                description,
                author,
                price,
                publisher
            }) => <>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{author}</p>
                <p>{price}</p>
                <p>{publisher}</p>
            </>)
        }
        <hr/>
    </div>
}

export default BooksCard;