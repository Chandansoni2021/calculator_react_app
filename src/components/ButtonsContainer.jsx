// button.jsx

import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "DEL",
    "7",
    "8",
    "9",
    "+",
    ".",
    "0",
    "*",
    "/",
    "-",
    "=",
     // Adding a "Delete" button
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName} // Adding a unique key for each button
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
