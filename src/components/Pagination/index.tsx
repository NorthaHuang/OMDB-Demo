import React, { useContext } from 'react';
import StyledWrapper from './styled';
import context from '../../store/context';
import axios from 'axios';
import { ISearchParams } from '../../store/types';

const countArray: number[] = [];
for (let i = 0; i < 11; i++) {
  countArray.push(i);
}

const Pagination = () => {
  const { searchData, setSearchResult, pagination, setPagination } = useContext(context);

  const changePage = (targetPage: number) => {
    /** TODO: 撰寫驗證 */
    if (targetPage < 1) {
      targetPage = 1;
    } else if (targetPage > pagination.totalPages) {
      targetPage = pagination.totalPages;
    }

    const params: ISearchParams = { s: searchData.title };

    if (searchData.year !== '') {
      params.y = searchData.year;
    }
    if (searchData.type !== '') {
      params.type = searchData.type;
    }

    params.page = targetPage.toString();

    /** 錯誤處理 */
    axios
      .get('', {
        params,
      })
      .then(result => {
        console.log(result);
        const data = result.data;
        setSearchResult(data);
        setPagination({
          ...pagination,
          nowPage: targetPage,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <button onClick={() => changePage(1)}>{'<<'}</button>
              </li>
              <li>
                <button onClick={() => changePage(pagination.nowPage - 1)}>{'<'}</button>
              </li>

              {countArray.map(num => {
                const targetNum = pagination.nowPage + num;
                if (targetNum > pagination.totalPages) {
                  return null;
                }
                return num === 0 ? (
                  <button
                    style={{
                      cursor: 'not-allowed',
                      color: 'black',
                      textDecoration: 'underline',
                    }}
                  >
                    {targetNum}
                  </button>
                ) : (
                  <li key={targetNum}>
                    <button onClick={() => changePage(targetNum)}>{targetNum}</button>
                  </li>
                );
              })}

              <li>
                <button onClick={() => changePage(pagination.nowPage + 1)}>{'>'}</button>
              </li>
              <li>
                <button onClick={() => changePage(pagination.totalPages)}>{'>>'}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Pagination;
