import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import MyModal from "./Modal";
import noScroll from "no-scroll";

import styled from "styled-components";

const Photo = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const close = () => {
    noScroll.off();
    setModalIsOpen(false);
  };
  const userProfileImageUrl = item.user.profile_image.large;
  const name = item.user.name;
  const photoUrl = item.urls.regular;
  const description = item.description;
  const altDescription = item.alt_description;
  const likes = item.likes;
  const download = (e) => {
    e.preventDefault();
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {open && (
        <Modal show={open} centered animation>
          <Modal.Body>
            <ModalLink
              href={item.links.download}
              target="_blank"
              rel="noreferrer"
            >
              View Photo
            </ModalLink>
            <ModalLink
              href={item.links.download}
              target="_blank"
              rel="noreferrer"
            >
              Visit User Profile
            </ModalLink>
            <ModalLink href={photoUrl} download onClick={(e) => download(e)}>
              Download
            </ModalLink>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </Modal.Body>
        </Modal>
      )}
      <PhotoContainer>
        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
          <ProfileImage src={userProfileImageUrl} alt="user profile image" />
          <div style={{ fontWeight: "bold" }}>{name}</div>
          <div style={{ marginLeft: "auto" }}>
            <MoreHorizIcon onClick={openModal} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Zoom>
          <Image src={photoUrl} alt={description} />
        </Zoom>
        <div style={{ padding: "20px" }}>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>{name}</div>
          <div style={{ marginBottom: "10px" }}>{altDescription}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <FavoriteIcon style={{ color: "red" }} /> {likes}
            </div>
            <ShareIcon
              onClick={() => {
                noScroll.on();
                setModalIsOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </PhotoContainer>
      {modalIsOpen && <MyModal url={photoUrl} closeModal={close} />}
    </>
  );
};

export default Photo;

const PhotoContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 100ms;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const ModalLink = styled.a`
  display: block;
  text-align: center;
  margin: 15px 0;
  padding: 10px 0;
  text-decoration: none;
  color: #222;
  &:hover {
    color: #222;
  }
  border-bottom: 1px solid #ddd;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  display: block;
  margin: 0 auto;
  color: red;
`;
