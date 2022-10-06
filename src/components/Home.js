import React from 'react'
import MostPopularList from './MostPopularList'
import PopularReviews from './PopularReviews'
import ListItems from './ListItems'
import Logo from './Logo'
import Search from './Search'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  // const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/d")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <div>
        <ListItems />
        <div>
          <PopularReviews />
          <MostPopularList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home