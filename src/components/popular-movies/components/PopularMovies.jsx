import React, { Component } from "react";
import { Row, Container, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      loading: true
    };
  }
  componentDidMount() {
    this.getPopularMovies();
  }
  getPopularMovies = async () => {
    try {
      let key = "97a8eb0351c05d0a6dcc4a6396836eea";
      let res = await Axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
      );
      this.setState({ popularMovies: res.data.results, loading: false });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <h1 className="my-5">Popular Movies</h1>

        <Slider {...settings}>
          {this.state.popularMovies.map(movie => {
            return (
              <Col key={movie.id} md="12">
                <Link to={`/movies/${movie.id}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Slider>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  color: red;
`;

export default PopularMovies;
