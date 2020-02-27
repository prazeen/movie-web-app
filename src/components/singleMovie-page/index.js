import React, { Component } from "react";
import Axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";
class SingleMoviesPage extends Component {
  state = {
    movie: null,
    loading: true
  };
  async componentDidMount() {
    try {
      let res = await Axios.get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=97a8eb0351c05d0a6dcc4a6396836eea&language=en-US`
      );
      this.setState({ movie: res.data, loading: false });
    } catch (error) {}
  }
  render() {
    if (this.state.loading) {
      return <Spinner animation="border" />;
    }
    return (
      <Container>
        <Row>
          <Col md="6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`}
              alt=""
            />
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>
    );
  }
}

export default SingleMoviesPage;
