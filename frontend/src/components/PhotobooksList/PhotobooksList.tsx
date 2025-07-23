import React, { useState } from 'react';
import './PhotobooksList.css'; // Подключаем стили

interface PhotobooksListProps {
  images: string[];
}

const PhotobooksList: React.FC<PhotobooksListProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="image-scroll-list">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openImage(image)}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div className={`modal ${selectedImage ? 'active' : ''}`} onClick={closeModal}>
          <span className="close-modal" onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
            &times;
          </span>
          <img src={selectedImage} alt="Full size" />
        </div>
      )}
    </div>
  );
};

export default PhotobooksList;