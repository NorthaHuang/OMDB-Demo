import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../store/context';
import StyledWrapper from './styled';

const SearchResult = () => {
  const { searchResult } = useContext(context);

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
          <ul className="row">
            {searchResult.Search.map(item => (
              <li key={item.imdbID} className="col-md-2">
                <Link to={`/detail/${item.imdbID}`}>
                  <img src={item.Poster} alt={`Poster of ${item.Title}`} />
                  <p>{item.Title}</p>
                </Link>
              </li>
            ))}
          </ul>
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
