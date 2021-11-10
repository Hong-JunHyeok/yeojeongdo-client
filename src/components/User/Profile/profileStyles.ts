import { css } from "@emotion/react";
import styled from "@emotion/styled";
import DefaultProfile from "assets/images/default_profile.svg";
import { MAIN_COLOR } from "styles/colors";

export const ProfileContainer = styled.div`
  margin: 1.5rem 0;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
`;

export const ProfileEditButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  right: 0;
  top: 70%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  user-select: none;
`;

interface IProfileImage {
  profile: string | undefined;
}

export const ProfileImage = styled.div<IProfileImage>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  ${props =>
    props.profile
      ? css`
          background-image: url(${props.profile});
        `
      : css`
          background-image: url(${DefaultProfile});
        `}
`;

export const ProfileInfo = styled.section`
  .profile_name {
    text-align: center;
  }
  .profile_follow {
    display: flex;
    width: 400px;
    justify-content: center;
    &_followings {
      padding: 0 1rem;
    }
    &_followers {
      padding: 0 1rem;
    }
  }
  .request_follow {
    text-align: center;
  }
`;

export const EditForm = styled.div`
  display: block;
  background-color: lightgray;
  padding: 1rem;
  border: 2px solid ${MAIN_COLOR};
  margin-top: 1rem;
`;

export const EditProfileImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .file-input {
    margin: 20px 0;
  }
  .prev-profile {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .profile-tool {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const EditUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  .name,
  .birth {
    input {
      margin-bottom: 10px;
    }
    margin: 30px 0;
    display: flex;
    flex-direction: column;
  }
`;

export const UserAlbumContainer = styled.div`
  width: 100%;
  display: flex;
`;
