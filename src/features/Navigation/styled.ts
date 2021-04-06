import styled from "styled-components";
import { NavLink } from "react-router-dom";
import stars from "assets/stars.png";
import ProfileBG from "./assets/profileBg.svg";
import logout from "./assets/logout.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  width: 150px;
  z-index: 10;
  padding-top: 35px;
  background-color: #fff;
  transition: 0.3s all ease;
  overflow: hidden;
  background-image: url(${stars});
  background-size: cover;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-right: -10px;
`;

export const IconSVG = styled.svg`
  position: relative;
  z-index: 1;
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
`;
type BackSVGProps = {
  active: boolean;
};
export const BackSVG = styled.svg<BackSVGProps>`
  opacity: 0;
  position: absolute;
  z-index: -1;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  path: {
    width: 100%;
  }
`;
export const Footer = styled.div`
  width: 100%;
  margin-right: -8px;
`;
export const Item = styled(NavLink)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  &:visited {
    color: #000;
  }
  &.nav-item-active ${BackSVG} {
    opacity: 1;
  }
`;
export const Profile = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-size: 14px;
  &:after {
    content: "";
    position: absolute;
    top: -60px;
    left: 0;
    z-index: -1;
    display: block;
    width: 150px;
    height: 210px;
    background-image: url(${ProfileBG});
    background-image: url(${ProfileBG});
    background-size: 150px 240px;
    background-repeat: no-repeat;
    background-position: center 0;
  }
`;
type AvatarProps = {
  src: string;
};
export const Avatar = styled.div<AvatarProps>`
  position: relative;
  width: 44px;
  height: 44px;
  background-color: #444;
  background-image: url(${(props) => props.src});
  border-radius: 50%;
  margin-bottom: 5px;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 47px;
    height: 47px;
    border: 2px solid #dfe0eb;
    border-radius: 50%;
    left: -4px;
    top: -4px;
  }
`;
export const Name = styled.div`
  font-weight: 600;
`;
export const Exit = styled.button`
  color: #9fa2b4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  font-weight: 600;
  font-size: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 24px;
    background-image: url(${logout});
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 1;
  font-size: 16px;
  max-width: 330px;
  margin-bottom: 25px;
`;
