import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../store/context';
import StyledWrapper from './styled';
import Pagination from '../Pagination';

const SearchResult = () => {
  const { searchResult, pagination } = useContext(context);

  return (
    <StyledWrapper>
      {/* Search Result Metadata */}
      <header className="meta">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                {pagination.nowPage} of {'{type}'} "{'{title}'}" found in {'{Year}'}
              </p>
            </div>
          </div>
        </div>
      </header>

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

      <Pagination />
    </StyledWrapper>
  );
};

export default SearchResult;
