import React, { memo } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
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
    <ProfileContainer>
      <ProfileInfo>
        <ProfileTitle>{name}</ProfileTitle>
        <ProfileTwitter>@{twitter}</ProfileTwitter>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default memo(Profile);
