import { useEffect } from 'react'
import styles from "../Modal/Modal.module.css";
import PropTypes from "prop-types";

export const Modal = (props) => {
  const {largeImageURL, modalClose} = props

  

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      modalClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  

    return (
      <div className={styles.Overlay} onClick={modalClose}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
};