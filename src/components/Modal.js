import React from "react";
import { ShareSocial } from "react-share-social";

import styled from "styled-components";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  color: "white",
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  maxWidth: "500px",
};

const Modal = (props) => {
  return (
    <div>
      <Overlay onClick={() => props.closeModal()}></Overlay>
      <MyModal>
        <ShareSocial
          style={style}
          url={props.url}
          socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
        />
      </MyModal>
    </div>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const MyModal = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
  background-color: #fff;
`;
