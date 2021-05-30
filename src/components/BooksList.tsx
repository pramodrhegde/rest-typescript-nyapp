import React, { useEffect, useState } from "react";
import {fetchBooksList, fetchBooksFromList} from '../server/booksService';
import BooksCard from './BooksCard';

interface IBooksState{
    count: number
    list: []
};

const BooksList = (props) => {

    const [booksList, setBooksList] = useState([]);
    const [currentList, setCurrentList] = useState("");
    const [books, setBooks] = useState<IBooksState>({
        count: 0,
        list: []
    });

    useEffect(() => {
        fetchBooksList().then((res) => {
            console.log(res);
            setBooksList(res.results);
            setCurrentList(res.results[0].list_name_encoded);
        }).catch(err => {
            console.log(err);
            setBooksList([]);
        })
    }, []);

    useEffect(() => {
        if(currentList) {
            fetchBooksFromList(currentList).then(res => {
                setBooks({
                    count: res.num_results,
                    list: res.results
                });
            }).catch(err => {
                console.log(err);
                setBooks({
                    count: 0,
                    list: []
                });
            })
        }
    }, [currentList]);

    const handleListChange = (e) => {
        // console.log(e.target.value);
        setCurrentList(e.target.value);
    }

    return <div>
        <p>Newyork bet sellers list</p>
        <select name="best-seller-list" onChange={handleListChange}>
            {
                booksList.map((list, i) => <option value={list.list_name_encoded}>{list.display_name}</option>)
            }
        </select>
        {
            books.list.map(book => <BooksCard {...book}/>)
        }
    </div>;
};

export default BooksList;