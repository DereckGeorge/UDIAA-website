import React, { useState } from 'react';

const ProgressiveImage = ({ placeholder, src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <img
          src={placeholder}
          style={{ filter: 'blur(20px)', width: '100%', height: '100%', objectFit: 'cover' }}
          alt={alt}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out', width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {loading && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>}
    </div>
  );
};

export default ProgressiveImage;
