import React from 'react';
import StyledWrapper from './styled';

const testData = {
  Title: 'Batman',
  Year: '1989',
  Rated: 'PG-13',
  Released: '23 Jun 1989',
  Runtime: '126 min',
  Genre: 'Action, Adventure',
  Director: 'Tim Burton',
  Writer:
    'Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)',
  Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl',
  Plot:
    'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
  Language: 'English, French, Spanish',
  Country: 'USA, UK',
  Awards: 'Won 1 Oscar. Another 8 wins & 26 nominations.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.5/10' },
    { Source: 'Rotten Tomatoes', Value: '71%' },
    { Source: 'Metacritic', Value: '69/100' },
  ],
  Metascore: '69',
  imdbRating: '7.5',
  imdbVotes: '333,582',
  imdbID: 'tt0096895',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment',
  Website: 'N/A',
  Response: 'True',
};

const ItemDetail = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={testData.Poster} alt="img" />
          </div>
          <div className="col">
            <p>
              <b>Title:</b> {testData.Title}
            </p>
            <p>
              <b>Year:</b> {testData.Year}
            </p>
            <p>
              <b>Rated:</b> {testData.Rated}
            </p>
            <p>
              <b>Released:</b> {testData.Released}
            </p>
            <p>
              <b>Runtime:</b> {testData.Runtime}
            </p>
            <p>
              <b>Genre:</b> {testData.Genre}
            </p>
            <p>
              <b>Director:</b> {testData.Director}
            </p>
            <p>
              <b>Writer:</b> {testData.Writer}
            </p>
            <p>
              <b>Actors:</b> {testData.Actors}
            </p>
            <p>
              <b>Plot:</b> {testData.Plot}
            </p>
            <p>
              <b>Language:</b> {testData.Language}
            </p>
            <p>
              <b>Country:</b> {testData.Country}
            </p>
            <p>
              <b>Awards:</b> {testData.Awards}
            </p>

            <div>
              <ul>
                <li>
                  <b>Ragings</b>
                </li>
                {testData.Ratings.map(rating => (
                  <li key={rating.Source}>
                    <b>{rating.Source}: </b>
                    {rating.Value}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              <b>Metascore:</b> {testData.Metascore}
            </p>
            <p>
              <b>imdbRating:</b> {testData.imdbRating}
            </p>
            <p>
              <b>imdbVotes:</b> {testData.imdbVotes}
            </p>
            <p>
              <b>imdbID:</b> {testData.imdbID}
            </p>
            <p>
              <b>Type:</b> {testData.Type}
            </p>
            <p>
              <b>DVD:</b> {testData.DVD}
            </p>
            <p>
              <b>BoxOffice:</b> {testData.BoxOffice}
            </p>
            <p>
              <b>Production:</b> {testData.Production}
            </p>
            <p>
              <b>Website:</b> {testData.Website}
            </p>
            <p>
              <b>Response:</b> {testData.Response}
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ItemDetail;
