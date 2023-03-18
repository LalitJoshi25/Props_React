import movie from './movie.json';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className='body'>
        <Header />
        <div className='Cart_css'>
        {
          movie.map((element,index)=>{
          return(
            <Cart key = {index}
                  img={element.Poster}
                  title = {element.Title}
                  year = {element.Year}
            />
          )
          })
        }
        
        </div>

    </div>
  );
}

export default App;
