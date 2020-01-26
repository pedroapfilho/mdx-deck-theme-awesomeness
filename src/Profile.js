import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  z-index: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 60px;
  border-radius: 50%;
  margin: 5px;
`;

const ProfileInfo = styled.div``;

const ProfileTitle = styled.h3`
  margin: 0.25em;
`;

const ProfileTwitter = styled.h4`
  margin: 0.25em;
`;

const Profile = ({ name, twitter }) => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage
          alt={name}
          src={`https://avatars.io/twitter/${twitter}`}
        />
        <ProfileInfo>
          <ProfileTitle>{name}</ProfileTitle>
          <ProfileTwitter>@{twitter}</ProfileTwitter>
        </ProfileInfo>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
