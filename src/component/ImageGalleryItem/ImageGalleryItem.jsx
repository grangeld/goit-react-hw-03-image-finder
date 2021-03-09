const ImageGalleryItem = ({ imgData, onShowModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onShowModal(imgData.largeImageURL, imgData.tags)}
    >
      <img
        src={imgData.webformatURL}
        alt={imgData.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
