import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import API from "../../api";

import * as C from "./styled";

import Button from "../../components/Button";

const Photo = () => {
  const [photo, setPhoto] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPhoto();
  }, []);

  const fetchPhoto = async () => {
    const { data } = await axios.get(`${API}/photos/${params.photo}`);

    setPhoto(data);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button onClick={handleBack}>Voltar</Button>
      <C.Title>{photo.title}</C.Title>
      <C.Photo src={photo.thumbnailUrl} />
    </>
  );
};

export default Photo;
