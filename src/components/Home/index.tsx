import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StyledWrapper from './styled';
import context from '../../store/context';
import axios from 'axios';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

interface IParams {
  s: string;
  y?: string;
  type?: string;
}

const Home = () => {
  const { title, setTitle, year, setYear, type, setType, setSearchResult } = useContext(
    context
  );

  const history = useHistory();

  const sendRequist = () => {
    /** TODO: 撰寫驗證 */

    const params: IParams = { s: title };

    if (year !== '') {
      params.y = year;
    }
    if (type !== '') {
      params.type = type;
    }

    /** 錯誤處理 */
    axios
      .get('', {
        params,
      })
      .then(result => {
        console.log(result);
        setSearchResult(result.data);
        history.push('/result');
      })
      .catch(err => console.log(err));
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Let's find out...</h2>

            <form>
              <label>
                <span>Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={evt => setTitle(evt.target.value)}
                />
              </label>
              <label>
                <span>Year</span>
                <input type="number" onChange={evt => setYear(evt.target.value)} />
              </label>
              <select value={type} onChange={evt => setType(evt.target.value)}>
                <option value="" disabled hidden>
                  Type
                </option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
              <button type="button" onClick={sendRequist}>
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
