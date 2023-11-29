import React, { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => { // 마우스 이벤트
      console.log("ref", ref.current); 
      if (!ref.current || ref.current.contains(event.target)) { // undefind이거나 모달 내부를 클릭했을 땐 return
        return; 
      }
      handler(event); // flase일 경우 if문에서 내려와 마우스 이벤트 토대로 handler로 저장된 모달을 끔
    };
    
    document.addEventListener("mousedown", listener); // 페이지 전체 대상 (클릭 감지)
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
