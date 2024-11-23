import React, { useEffect, useRef } from "react";

const AddressSearchModal = ({ onClose, onComplete }) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }

    isInitialized.current = true; 

    const scriptInstance = new window.daum.Postcode({
      oncomplete: (data) => {
        const fullAddress = data.address;
        onComplete(fullAddress); 
        onClose(); 
      },
    });

    scriptInstance.open({
      popupTitle: "우편번호 검색",
    });

    return () => {

    };
  }, [onClose, onComplete]);

  return null;
};

export default AddressSearchModal;
