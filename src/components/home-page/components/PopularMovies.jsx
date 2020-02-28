import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularMovies: [],
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
        `https://api.themoviedb.org/3/movie/popular?api_key=97a8eb0351c05d0a6dcc4a6396836eea&language=en-US&page=1`
      );
      this.setState({ PopularMovies: res.data.results, loading: false });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.loading) {
      return <Spinner animation="border" />;
    }
    return (
      <>
        <Container>
          <h1 className="my-5">PopularMovies </h1>
          <Row>
            {this.state.PopularMovies.map(movie => {
              return (
                <Col key={movie.id} md="4">
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
          </Row>
        </Container>
      </>
    );
  }
}

export default PopularMovies;
