import React, { useState } from "react";
// Components
import TabTitle from "./TabTitle";

interface Props {
  children: React.ReactElement[];
}

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-5/6 flex flex-col items-center">
      <ul className="w-full flex items-center justify-around border-b border-light-gray">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab] }
    </div>
  );
};

export default Tabs;
