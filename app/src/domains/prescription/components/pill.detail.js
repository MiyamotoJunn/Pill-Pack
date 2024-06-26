import { useLocation } from "react-router-dom";
import React from "react";

export default function PillDetail() {
  const location = useLocation();
  const { pill } = location.state;

  console.log(pill);
  return (
    <div className="flex flex-col justify-center items-center border  rounded-lg shadow-custom01 my-2">
      <div className="flex flex-col items-center w-full p-4   bg-mint02">
        {/* 이미지 컨테이너 */}
        <div className="p-4">
          <img
            src={pill.image}
            alt={`${pill.name} 로고`}
            className="flex-none  overflow-hidden w-20 h-25 bg-white border-2 border-gray-300"
          />
        </div>
        {/* 텍스트 컨테이너 */}
        <div className="flex-grow ml-4 text-center">
          <div className="text-lg font-semibold">{pill.name}</div>
          <div className="text-xs">{pill.description}</div>
          <div className="text-xs">{pill.chart}</div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative flex justify-between items-center w-full py-2 bg-white rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <div className="flex flex-col items-start text-sm text-black font-semibold pl-4">
            <span className="ml-1">용도: {pill.description}</span>
            <span className="ml-1">섭취 정보: 어떻게 어떻게 섭취하십시오</span>
            <span className="ml-1">보관 방법: 어떻게 어떻게 보관하십시오</span>
          </div>
        </div>
        <div className="relative flex justify-between items-center w-full py-2 bg-white rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5/6 h-[0.1rem] rounded-lg bg-gray-300"></span>
          <div className="flex flex-col items-start text-sm text-warn02 font-semibold pl-4">
            <span className="ml-1">복용 시 주의 사항: </span>
            <span className="ml-1">부작용: </span>
          </div>
        </div>
      </div>
    </div>
  );
}
