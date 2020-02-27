import React, { Component } from "react";
import { Row, Container, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
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
    return (
      <>
        <Container>
          <Wrapper>
            <h1 className="my-5">Popular Movies</h1>
          </Wrapper>

          <Row>
            {this.state.popularMovies.map(movie => {
              return (
                <Col md="3">
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
          </Row>
        </Container>
      </>
    );
  }
}

const Wrapper = styled.div`
  color: red;
`;

export default PopularMovies;
