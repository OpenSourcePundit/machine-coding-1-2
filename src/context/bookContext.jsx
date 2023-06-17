import {createContext,useReducer} from "react";
import {bookReducer} from "../reducer/bookReducer";

export const BookContext = createContext();
export const BookProvider = ({children}) =>{

 const initialState ={
    books:[ {
        _id:"1",
        title: "The Great Gatsby",
        image: "https://i.ibb.co/fkHsjnG/1-The-Great-Gatsby-Cover-1925-Retouched.jpg",
        author: "F. Scott Fitzgerald",
        Pages: 250,
        shelf:"",
      },
      {
        _id: "2",
        title: "To Kill a Mockingbird",
        image: "https://i.ibb.co/gF7rWJj/book-cover-To-Kill-a-Mockingbird-many-1961.webp",
        author: "Harper Lee",
        Pages: 320,
        shelf:"",
      },
      {
        _id: "3",
        title: "1984",
        image: "https://i.ibb.co/mTjWQS4/3-71-Nvk-Zxn-f-L-AC-UF1000-1000-QL80.jpg",
        author: "George Orwell",
        Pages: 328,
        shelf:"",
      },
      {
        _id: "4",
        title: "The Lord of the Rings",
        image: "https://i.ibb.co/0X49MXc/4-33.jpg",
        author: "J.R.R. Tolkien",
        Pages: 1178,
        shelf:"",
      },
      {
        _id: "5",
        title: "Pride and Prejudice",
        image: "https://i.ibb.co/JH7fztq/5-780143454229.jpg",
        author: "Jane Austen",
        Pages: 432,
        shelf:"",
      },
      {
        _id: "6",
        title: "The Catcher in the Rye",
        image: "https://i.ibb.co/tYkz6HP/6-download.jpg",
        author: "J.D. Salinger",
        Pages: 224,
        shelf:"",
      },
      {
        _id: "7",
        title: "Sapiens: A Brief History of Humankind",
        image: "https://i.ibb.co/V9tZPtR/751-Sn8-PEXwc-L.jpg",
        author: "Yuval Noah Harari",
        Pages: 464,
        shelf:"Read",
      },
      {
        _id: "8",
        title: "The Hobbit",
        image: "https://i.ibb.co/0Y0pkpF/8-The-Hobbit-trilogy-dvd-cover.jpg",
        author: "J.R.R. Tolkien",
        Pages: 320,
        shelf:"",
      },
      {
        _id: "9",
        title: "Harry Potter and the Philosopher's Stone",
        image: "https://i.ibb.co/TKLv0zN/95165-He67-NEL.jpg",
        author: "J.K. Rowling",
        Pages: 336,
        shelf:"Read",
      },
      {
        _id: "10",
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        image: "https://i.ibb.co/R22xSwC/10p90695-p-v8-aj.jpg",
        author: "C.S. Lewis",
        Pages: 208,
        shelf:"Read",
      },
      {
        _id: "11",
        title: "The Book Thief",
        image: "https://i.ibb.co/SwQYvW0/1141-Lu-Ulddrh-L.jpg",
        author: "Markus Zusak",
        Pages: 576,
        shelf:"",
      },
      {
        _id: "12",
        title: "Brave New World",
        image: "https://i.ibb.co/tpnVPBr/12-Brave-New-World-First-Edition.jpg",
        author: "Aldous Huxley",
        Pages: 288,
        shelf:"",
      },
      {
        _id: "13",
        title: "The Da Vinci Code",
        image: "https://i.ibb.co/dcSN4qH/13the-da-vinci-code-589f9cee3df78c4758a2d9e7.jpg",
        author: "Dan Brown",
        Pages: 592,
        shelf:"Want_To_Read",
      },
      {
        _id: "14",
        title: "The Girl on the Train",
        image: "https://i.ibb.co/TtkrnhR/14-The-Girl-On-The-Train-by-Paula-Hawkins-1200x1859.jpg",
        author: "Paula Hawkins",
        Pages: 336,
        shelf:"",
      },
      {
        _id: "15",
        title: "Gone Girl",
        image: "https://i.ibb.co/FHjYFGT/159780753827666.jpg",
        author: "Gillian Flynn",
        Pages: 432,
        shelf:"",
      },
      {
        _id: "16",
        title: "The Hunger Games",
        image: "https://i.ibb.co/6sJS9G2/162767052-SY475.jpg",
        author: "Suzanne Collins",
        Pages: 384,
        shelf:"",
      },
      {
        _id: "17",
        title: "The Fault in Our Stars",
        image: "https://i.ibb.co/HD31dGV/17-F0945-E34-FBAA-4515-B625-4-E5-D27010518-Img400.jpg",
        author: "John Green",
        Pages: 336,
        shelf:"",
      },
      {
        _id: "18",
        title: "The Harry Potter series",
        image: "https://i.ibb.co/DfxNywn/18images.jpg",
        author: "J.K. Rowling",
        Pages: 4160,
        shelf:"Want_To_Read",
      },
      {
        _id: "19",
        title: "The Power of Now",
        image: "https://i.ibb.co/ZKBzgxN/19download.jpg",
        author: "Eckhart Tolle",
        Pages: 236,
        shelf:"Currently_Reading",
      },
      {
        _id: "20",
        title: "The Lean Startup",
        image: "https://i.ibb.co/myFNkkY/20-The-Lean-Startup-Eric-Ries-Buy-Online-Bookbins-1.png",
        author: "Eric Ries",
        Pages: 336,
        shelf:"Currently_Reading",
      }],
    search:"",
    shelves:["Currently_Reading","Want_To_Read","Read"],
 }

  const [state,dispatch] = useReducer (bookReducer,initialState);

  return(
    
    <BookContext.Provider 
    value={{
      books:state.books,
      search:state.search,
      shelves:state.shelves,
      bookDispatch:dispatch,
    }}
    >{children}
    </BookContext.Provider>
    
    
  )


}