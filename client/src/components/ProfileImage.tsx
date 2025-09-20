import profileImage from "@assets/IMG-20250324-WA0000~2.jpg";
import { useState } from "react";

const ProfileImage = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-500 rounded-2xl opacity-30 blur-sm"></div>
      <div className="relative p-3 bg-white rounded-2xl shadow-2xl border-4 border-white">
        <img
          src={profileImage}
          alt="Amahle Seteni - Cloud Computing Associate"
          className={`rounded-lg w-full h-auto max-w-md object-contain ${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ 
            imageRendering: 'auto', 
            width: 'auto',
            maxHeight: '400px',
            minHeight: '300px',
            backgroundColor: 'white'
          }}
          onLoad={() => setImgLoaded(true)}
        />
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;