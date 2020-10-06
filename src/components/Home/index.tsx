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
  page?: string;
}

const Home = () => {
  const { searchData, setSearchData, setSearchResult } = useContext(context);

  const history = useHistory();

  const sendRequist = () => {
    /** TODO: 撰寫驗證 */

    const params: IParams = { s: searchData.title };

    if (searchData.year !== '') {
      params.y = searchData.year;
    }
    if (searchData.type !== '') {
      params.type = searchData.type;
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
                  value={searchData.title}
                  onChange={evt =>
                    setSearchData({
                      ...searchData,
                      title: evt.target.value,
                    })
                  }
                />
              </label>
              <label>
                <span>Year</span>
                <input
                  type="number"
                  onChange={evt =>
                    setSearchData({
                      ...searchData,
                      year: evt.target.value,
                    })
                  }
                />
              </label>
              <select
                value={searchData.type}
                onChange={evt =>
                  setSearchData({
                    ...searchData,
                    type: evt.target.value,
                  })
                }
              >
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
