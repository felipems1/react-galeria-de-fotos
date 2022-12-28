import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import API from "../../api";

import * as C from "./styled";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const { data } = await axios.get(`${API}/albums`);

    setAlbums(data);
  };

  return (
    <C.Container>
      {albums.map((item) => (
        <C.Album_List key={item.id}>
          <Link to={`/${item.id}`} className="Link">
            {item.title}
          </Link>
        </C.Album_List>
      ))}
      ;
    </C.Container>
  );
};

export default Home;
