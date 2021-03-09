import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './component/Searchbar';
import imgApi from './component/api/api';
import ImageGallery from './component/ImageGallery';
import Button from './component/Button';
import Modal from './component/Modal';

function App() {
  const [imgList, setImgList] = useState([]);
  const [pageImg, setPageImg] = useState(1);
  const [imgName, setImgName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSpiner, setShowSpiner] = useState(false);
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = value => {
    setPageImg(1);
    setImgList([]);
    setImgName(value.trim(), handleShowPictures(value.trim()));
  };

  const handleShowModal = (img, alt) => {
    if (!showModal) {
      setDescription(prevState => alt);
      setPicture(prevState => img);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleLoadMoreImg = () => {
    setPageImg(prevState => prevState + 1);
  };

  const handleShowPictures = (value = imgName) => {
    setShowSpiner(true);
    imgApi(value, pageImg)
      .then(response => {
        setImgList(prevState => [...prevState, ...response.data.hits]);
      })
      .then(() => setShowSpiner(false))
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  useEffect(
    () => {
      if (pageImg === 1) return;
      handleShowPictures();
    },
    // eslint-disable-next-line
    [pageImg],
  );

  const style = { textAlign: 'center' };
  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />

      <ImageGallery onShowModal={handleShowModal}>{imgList}</ImageGallery>
      {imgList.length > 0 && !showSpiner && (
        <Button onLoadMoreImg={handleLoadMoreImg} />
      )}
      {showModal && (
        <Modal
          picture={picture}
          description={description}
          onCloseModal={handleShowModal}
        />
      )}
      {showSpiner && (
        <div style={style}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      )}
    </div>
  );
}

export default App;
