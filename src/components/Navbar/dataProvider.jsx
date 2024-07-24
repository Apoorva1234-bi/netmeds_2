import { createContext } from "react";
import { useState } from "react";
import Upload_Page from "./upload";

export const DataContext = createContext({});

function DataProvider({ children }) {
  const handleonUpload = () => {
    <Upload_Page />;
  };
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handlemouseEnter = () => {
    setIsCardVisible(true);
    console.log("mouse entered");
  };
  const handleonclick = () => {
    setIsCardVisible(!isCardVisible);
    console.log("mouse clicked");
  };
  const handlemouseLeave = () => {
    setTimeout(() => {
      if (!isCardVisible) {
        setIsCardVisible(false);
      }
    }, 200);
  };
  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
    console.log("mouse entered card");
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    setIsCardVisible(false);
    console.log("mouse exits card");
  };
  return (
    <>
      <DataContext.Provider
        value={{
          handleCardMouseEnter,
          handleCardMouseLeave,
          handleonclick,
          handleonUpload,
          handlemouseLeave,
          handlemouseEnter,
          setIsCardVisible,
          isCardVisible,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
export default DataProvider;
