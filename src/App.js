import './App.css';
import { useState } from 'react';
import { data }from './data';

function App() {
  const [books, setBooks] = useState(data);

  const removeBook =  (id) =>{
  let newBooks  = books.filter(books  => books.id !== id)
  setBooks(newBooks);
}

  return (<div>
    <div>
      <h1 className='container'>{books.length} Books to read in a Lifetime</h1>
      <div>
        {books.map((thing =>{
          const{id, bookName, image, description, buyBook} = thing;

          return(<div key={id}>

            <div className='spaceBox'>
              <h2>{id}. {bookName}</h2>
            </div>

        <div className='bookBox'>
            <div>
              <img src={image} alt="book" width="250px" height="350px"/>
            </div>

            <div className='textBox'>
            <div>
              <p>{description}</p>
            </div>

        <div className='buttonBox'>
            <div>
              <a href={buyBook} target='_blank' rel="noopener noreferrer">
              <button  className='btn'>Buy on Amazon</button>
              </a>
            </div>

            <div>
              <button onClick={()=> removeBook(id)} className='btnTwo'>I've read this book</button>
            </div>
          </div>
            </div>
          </div>
          </div>
          )
        }))}

      </div>

    </div>
  
    <div className='container'>
      <button onClick={()=> setBooks([])} className='btnBig'>I've read All these books</button>
      </div>
    </div>
  );
}

export default App;
