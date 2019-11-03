import React from 'react';
import SearchBar from './search-bar/searchBar';
import ImageList from './image/imageList';
import axios from 'axios';
import './app.css';

class App extends React.Component {

// Eski usul
//onSearchImage(search) {
//  console.log('App:' + search);
//  axios.get('https://api.unsplash.com/search/photos', {
//    params: {
//      query: search
//    },
//    headers: {
//      Authorization: 'Client-ID c0dd1f08b7aa0649351ca4e681c7daf25a9469288b0950ccf747f88f11744651'
//    }
//  })
//  .then((result) => {
//    console.log(result);
//  })
//}

state = {
  images: []
}

onSearchImage = async (search) => { //asenkron yükledik
//  console.log('App:' + search);
  const result = await axios.get('https://api.unsplash.com/search/photos', {  // resultu degiskene atadık await ile axiosu bekle dedik
    params: {
      query: search
    },
    headers: {
      Authorization: 'Client-ID c0dd1f08b7aa0649351ca4e681c7daf25a9469288b0950ccf747f88f11744651'
    }
  })

  //console.log(result.data.results);

  this.setState({
    images: result.data.results
  });

}


  render () {
    return (
      <div className="app-container">
        <div className="title-cont">
          <h1 class="ui header">Find Image Gallery App</h1>
          <h2>ReactJs, Unsplash API, Axios, Semantic UI</h2>
        </div>
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images}/>

      </div>
    )
  }
};

export default App;
