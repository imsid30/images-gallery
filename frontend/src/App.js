import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/Search";
import { useState } from "react";
import ImageCard from "./components/ImageCards";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [searchWord, setSearchWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchWord}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: searchWord }, ...images]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearchWord("");
  };

  const handleDelete = (imageId) => {
    console.log(imageId);
    setImages(images.filter((image) => image.id !== imageId));
  };

  return (
    <div>
      <Header tittle="Images Gallery"></Header>
      <Search
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col className="pb-3" key={i}>
              <ImageCard image={image} handleDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
