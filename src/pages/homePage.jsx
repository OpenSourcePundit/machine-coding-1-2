import "./homePage.css";
import {useContext} from 'react';
import {BookContext} from '../context/bookContext';

export const HomePage = () =>{

    const {books} = useContext(BookContext);

    return(
        <div className="homepage-main">
            <div className="sectionshelf">
                <h1 className="shelfheader">Currently Reading</h1>
                <div className="bookholder">
                    {/* {books.filter((book)=>book.shelf === "Currently_Reading").map((book)=>{
                        return(<bookCard book={{book}}/>)
                    })} */}
                    


                </div>

            </div>
            <div className="sectionshelf">
            <h1 className="shelfheader">Want To Read</h1>
                <div className="bookholder">
                {/* {books.filter((book)=>book.shelf === "Want_To_Read").map((book)=>{
                        return(<bookCard book={{book}}/>)
                    })} */}

                    
                </div>

            </div>
            <div className="sectionshelf">
            <h1 className="shelfheader">Read</h1>
                <div className="bookholder">
                {/* {books.filter((book)=>book.shelf === "Read").map((book)=>{
                        return(<bookCard book={{book}}/>)
                    })} */}

                    
                </div>

            </div>
        </div>
    )
}