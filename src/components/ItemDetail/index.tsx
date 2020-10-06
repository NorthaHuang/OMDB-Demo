import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledWrapper from './styled';
import axios from 'axios';

interface IUrlParams {
  id: string;
}

interface IVideoRating {
  Source: string;
  Value: string;
}
interface IVideoData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IVideoRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

const ItemDetail = () => {
  const [videoData, setVideoData] = useState<IVideoData>({} as IVideoData);

  const { id: VIDEO_ID } = useParams<IUrlParams>();

  useEffect(() => {
    axios.get('', { params: { i: VIDEO_ID } }).then(result => {
      console.log(result);
      setVideoData(result.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper>
      {videoData && videoData.Ratings && (
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
                <b>Type:</b> {videoData.Type}
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
