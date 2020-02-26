import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      return <Spinner animation="border" />;
    }
    return (
      <>
        <Container>
          <h1 className="my-5">Now Playing </h1>
          <Row>
            {this.state.nowPlaying.map(movie => {
              return (
                <Col key={movie.id} md="3">
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

export default NowPlaying;
