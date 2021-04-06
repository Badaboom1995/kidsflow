import React from "react";
import { Item, IconSVG, BackSVG } from "../styled";
import sprite from "../assets/sprite.svg";

interface INavItem {
  to: string;
  iconId?: string;
  children: React.ReactNode;
  color: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function NavItem({ to, iconId, children, color, active, onClick }: INavItem) {
  return (
    <div onClick={onClick}>
      <Item to={to} activeClassName="nav-item-active">
        <IconSVG>
          <use href={`${sprite}#${iconId}`}></use>
        </IconSVG>
        <BackSVG viewBox="0 0 144 160" active={active}>
          <path
            d="M0 54.819C0 46.5347 6.71573 39.819 15 39.819H114L116.677 39.8536C130.609 40.0337 142 28.7892 142 14.8557V0V80.362V160V145.905C142 132.098 130.807 120.905 117 120.905H114H15C6.71573 120.905 0 114.189 0 105.905V54.819Z"
            fill={color}
          />
        </BackSVG>

        {children}
      </Item>
    </div>
  );
}
export default NavItem;
