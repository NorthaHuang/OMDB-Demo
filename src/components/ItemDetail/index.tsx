import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import StyledWrapper from './styled';
import context from '../../store/context';
import axios from 'axios';
import { IUrlParams, IVideoData } from './types';

const ItemDetail = () => {
  const [videoData, setVideoData] = useState<IVideoData>({} as IVideoData);
  const { setIsLoading } = useContext(context);

  const history = useHistory();
  const { id: VIDEO_ID } = useParams<IUrlParams>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('', { params: { i: VIDEO_ID } })
      .then(result => {
        const data = result.data;
        console.log(result);
        if (data.Response === 'False') {
          history.push('/error');
          return;
        }
        setVideoData(data);
      })
      .catch(err => {
        console.log(err);
        history.push('/error');
      })
      .finally(() => setIsLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper>
      {videoData && (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={videoData.Poster} alt="img" />
            </div>
            <div className="col">
              <p>
                <b>Title:</b> {videoData.Title}
              </p>
              <p>
                <b>Year:</b> {videoData.Year}
              </p>
              <p>
                <b>Type:</b> {videoData.Type}
              </p>
              <p>
                <b>Rated:</b> {videoData.Rated}
              </p>
              <p>
                <b>Released:</b> {videoData.Released}
              </p>
              <p>
                <b>Runtime:</b> {videoData.Runtime}
              </p>
              <p>
                <b>Genre:</b> {videoData.Genre}
              </p>
              <p>
                <b>Director:</b> {videoData.Director}
              </p>
              <p>
                <b>Writer:</b> {videoData.Writer}
              </p>
              <p>
                <b>Actors:</b> {videoData.Actors}
              </p>
              <p>
                <b>Plot:</b> {videoData.Plot}
              </p>
              <p>
                <b>Language:</b> {videoData.Language}
              </p>
              <p>
                <b>Country:</b> {videoData.Country}
              </p>
              <p>
                <b>Awards:</b> {videoData.Awards}
              </p>

              {videoData.Ratings && videoData.Ratings.length > 0 && (
                <div className="Ratings">
                  <p>
                    <b>Ratings:</b>
                  </p>
                  <ul>
                    {videoData.Ratings.map(rating => (
                      <li key={rating.Source}>
                        <b>{rating.Source}: </b>
                        {rating.Value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p>
                <b>Metascore:</b> {videoData.Metascore}
              </p>
              <p>
                <b>imdbRating:</b> {videoData.imdbRating}
              </p>
              <p>
                <b>imdbVotes:</b> {videoData.imdbVotes}
              </p>
              <p>
                <b>imdbID:</b> {videoData.imdbID}
              </p>
              <p>
                <b>DVD:</b> {videoData.DVD}
              </p>
              <p>
                <b>BoxOffice:</b> {videoData.BoxOffice}
              </p>
              <p>
                <b>Production:</b> {videoData.Production}
              </p>
              <p>
                <b>Website:</b> {videoData.Website}
              </p>
              <p>
                <b>Response:</b> {videoData.Response}
              </p>
            </div>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

export default ItemDetail;
