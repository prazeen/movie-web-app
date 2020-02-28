import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: [],
      loading: true
    };
  }
  componentDidMount() {
    this.getNowPlayingMovies();
  }
  getNowPlayingMovies = async () => {
    try {
      let key = "97a8eb0351c05d0a6dcc4a6396836eea";
      let res = await Axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
      );
      this.setState({ nowPlaying: res.data.results, loading: false });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="success" />
        </Container>
      );
    }
    var settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <SliderWrapper>
        <SlideArrowLeft>
          <Container>
            <h1 className="mt-4 mb-4">Now Playing </h1>
            <Slider {...settings}>
              {this.state.nowPlaying.map(movie => {
                return (
                  <Col key={movie.id} md="12">
                    <Link to={`/movies/${movie.id}`}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        />

                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Slider>
          </Container>
        </SlideArrowLeft>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
  .slick-arrow {
    background-color: #e3e3e3;
    width: 36px;
    height: 36px;
    border-radius: 100px;
    margin-left: -13px;
    margin-right: -13px;
  }
`;

// const CardBodyStyle = styled.div`
//   .card-body {
//     /* padding: -0.75rem; */
//   }
// `;

const SlideArrowLeft = styled.div`
  .slick-prev:before {
    color: white;
  }
`;

export default NowPlaying;
