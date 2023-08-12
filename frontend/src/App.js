import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/Search';
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY; 

const App = () => {

  const [searchWord,setSearchWord] = useState('');

  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
    fetch(`https://api.unsplash.com/photos/random/?query=${searchWord}&client_id=${UNSPLASH_KEY}`)
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })
    setSearchWord('');
  }

  return (
    <div>
      <Header tittle="Images Gallery"></Header>
      <Search searchWord = {searchWord} setSearchWord={setSearchWord} handleSubmit = {handleSearchSubmit}/>
    </div>
  );
}

export default App;
