import React from 'react';
import StyledWrapper from './styled';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Let's find out...</h2>

            <form>
              <label>
                <span>Title</span>
                <input type="text" />
              </label>
              <label>
                <span>Year</span>
                <input type="number" />
              </label>
              <select>
                <option selected disabled hidden>
                  Type
                </option>
                <option>Movie</option>
                <option>Series</option>
                <option>Episode</option>
              </select>
              <button type="button">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Home;
