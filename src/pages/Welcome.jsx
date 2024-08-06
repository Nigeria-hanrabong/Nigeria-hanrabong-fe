import FishSuccessModal from '../components/FishSuccessModal';
import Logo from '../components/Logo';
import React, { useState } from 'react';
const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }; // 부모 요소에 이걸 호출해주면 된다
  // 이부분을 이안 코드랑 합치면 모달창 완성 !
    return (
      <div>

        <FishSuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
        
      </div>
    );
  }

export default Welcome;

