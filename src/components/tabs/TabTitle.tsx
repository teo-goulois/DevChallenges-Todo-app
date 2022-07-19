import React from "react";
type Props = {
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle = ({ title, selectedTab, setSelectedTab, index }: Props) => {
  return (
    <li className="grow basis-0 flex justify-center">
      <div className="w-[60%] ">
        <button className="w-full" onClick={() => setSelectedTab(index)}>
          <p className="font-semibold text-primary text-sm text-center w-full">
            {title}
          </p>
        </button>
        {selectedTab === index && (
          <div className="bg-blue h-1 w-full rounded-t"></div>
        )}
      </div>
    </li>
  );
};

export default TabTitle;
