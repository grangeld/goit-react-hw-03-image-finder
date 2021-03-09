import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ children, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {children.map((data, index) => (
        <ImageGalleryItem
          key={index}
          imgData={data}
          onShowModal={onShowModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
