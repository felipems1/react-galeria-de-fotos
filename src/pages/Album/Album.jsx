import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import API from "../../api";

import * as C from "./styled";

import Button from "../../components/Button";

const Album = () => {
  const [album, setAlbum] = useState([]);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchAlbum();
    fetchPhotos();
  }, []);

  const fetchAlbum = async () => {
    const { data } = await axios.get(`${API}/albums/${params.album}`);

    setAlbum(data);
  };

  const fetchPhotos = async () => {
    const { data } = await axios.get(`${API}/albums/${params.album}/photos`);

    setPhotos(data);
  };

  const navigate = useNavigate();

  const params = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <C.Container>
      <Button onClick={handleBack}>Voltar</Button>
      <C.Title>{album.title}</C.Title>
      <C.Albums>
        {photos.map((item) => (
          <Link to={`/${params.album}/${item.id}`}>
            <C.Photo src={item.url} />
          </Link>
        ))}
        ;
      </C.Albums>
    </C.Container>
  );
};

export default Album;
