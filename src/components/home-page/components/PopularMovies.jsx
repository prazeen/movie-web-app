import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
      <SliderWrapper>
        <SlideArrowLeft>
          <Container>
            <h1 className="my-5">Popular Movies </h1>
            <Slider {...settings}>
              {this.state.PopularMovies.map(movie => {
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

        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Footer Content</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
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

const SlideArrowLeft = styled.div`
  .slick-prev:before {
    color: white;
  }
`;

export default PopularMovies;
