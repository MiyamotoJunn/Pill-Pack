import React, { useState } from "react";
import images from "../../../constants/image.constant";

export default function PillScroll({ tabs, wordLimit }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {/* 탭 컨테이너 */}
      <div className="flex w-full overflow-x-auto scrollbar-hide border-b border-mint01">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative text-sm whitespace-nowrap py-4 px-4 flex items-center justify-center ${
              index === activeTab
                ? " bg-gray-200 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
            {index === activeTab && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 rounded-t-xl bg-mint02"></span>
            )}
          </button>
        ))}
      </div>

      {/* 아이템 컨테이너 */}
      <div className="overflow-x-auto py-6 bg-gray-100">
        <div className="flex space-x-4 pl-2">
          {tabs[activeTab].items.map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-max">
              <img
                src={item.image || images.no_img}
                alt={item.label}
                className="h-16 px-3"
              />
              <div className="text-xs mt-1">
                {item.label && item.label.length > wordLimit
                  ? `${item.label.substring(0, wordLimit)}...`
                  : item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
