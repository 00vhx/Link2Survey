import React, { useState } from 'react';

const PictureComponent = ({index}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="picture-container">
        <div className="title-wrapper">
        <div className="number">Q{index}</div>
        <input />
      </div>
      <button onClick={handleButtonClick} className="add-picture-button">
        <div className="plus-icon">+</div>
      </button>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Selected" className="preview-image" />
        </div>
      )}
      {/* {selectedFile && <p>선택된 파일: {selectedFile.name}</p>} */}
    </div>
  );
};

export default PictureComponent;
