import React from 'react';
import StyledWrapper from './styled';

// const testJSON = {
//   Title: 'Heaven',
//   Year: '2002',
//   Rated: 'R',
//   Released: '21 Feb 2002',
//   Runtime: '97 min',
//   Genre: 'Crime, Drama, Romance, Thriller',
//   Director: 'Tom Tykwer',
//   Writer:
//     'Krzysztof Kieslowski (trilogy "Heaven, Hell and Purgatory"), Krzysztof Piesiewicz (trilogy "Heaven, Hell and Purgatory"), Krzysztof Kieslowski (screenplay), Krzysztof Piesiewicz (screenplay)',
//   Actors: 'Cate Blanchett, Giovanni Ribisi, Remo Girone, Stefania Rocca',
//   Plot:
//     "A woman takes the law into her own hands after police ignore her pleas to arrest the man responsible for her husband's death, and finds herself not only under arrest for murder but falling in love with an officer.",
//   Language: 'Italian, English',
//   Country: 'UK, France, Italy, Germany, USA',
//   Awards: '6 wins & 7 nominations.',
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BMjdjOTMyZGEtYjZhNi00ZTE1LWExYTUtNzI1NzZlY2ExMzVkXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg',
//   Ratings: [
//     { Source: 'Internet Movie Database', Value: '7.0/10' },
//     { Source: 'Rotten Tomatoes', Value: '74%' },
//     { Source: 'Metacritic', Value: '68/100' },
//   ],
//   Metascore: '68',
//   imdbRating: '7.0',
//   imdbVotes: '23,056',
//   imdbID: 'tt0246677',
//   Type: 'movie',
//   DVD: 'N/A',
//   BoxOffice: 'N/A',
//   Production: 'Mirage Enterprises, X-Filme Creative Pool, Star Edizioni Cinematografiche',
//   Website: 'N/A',
//   Response: 'True',
// };

const SearchResult = () => {
  return (
    <StyledWrapper>
      {/* Search Result Metadata */}
      <section className="meta">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                # of {'{type}'} "{'{title}'}" found in {'{Year}'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Result List */}
      <section className="list">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
                <li>
                  <a href="/detail">
                    <img src="" alt="img" />
                    <p>This is Title</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pagination">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <button>{'<<'}</button>
                </li>
                <li>
                  <button>{'<'}</button>
                </li>
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
                <li>
                  <button>4</button>
                </li>
                <li>
                  <button>{'>'}</button>
                </li>
                <li>
                  <button>{'>>'}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default SearchResult;
