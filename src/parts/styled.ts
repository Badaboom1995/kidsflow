import styled from "styled-components";
import spinner from "assets/spinner.gif";
import { colors } from "config/constants";
import arrow from "assets/arrow.svg";

const selectTariffColor = (type) => {
  if (type === "basic") return "#BEC2CE";
  if (type === "medium") return "#FF5858";
  if (type === "premium") return "#00BFA5";
};
export const Container = styled.div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;
export const Label = styled.p`
  padding-left: 40px;
  margin: 0;
  margin-bottom: 10px;
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;
type TariffProps = { type: string };
export const Tariff = styled.div<TariffProps>`
  width: 75px;
  font-size: 14px;
  padding: 5px;
  border: 2px solid ${(props) => selectTariffColor(props.type)};
  border-radius: 5px;
  text-align: center;
  color: ${(props) => selectTariffColor(props.type)};
  text-transform: uppercase;
`;
type StatusProps = { status?: "active" | "disabled" | "waiting" | string };
export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    background-color: ${(props) => {
    switch (props.status) {
      case "active":
        return "#27AE60";
      case "disabled":
        return colors.primary;
      case "waiting":
        return "#FFC400";
    }
    return props.status ? "#27AE60" : colors.primary;
  }};
    border-radius: 50%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #0094ff;
  cursor: pointer;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
type OverlayProps = {
  closed?: boolean;
};
export const Overlay = styled.div<OverlayProps>`
  opacity: ${(props) => (props.closed ? "0" : "1")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.closed ? -1 : 9)};
  background-color: #1b1b1b4d;
  cursor: pointer;
  transition: 0.2s all ease;
`;

export const Loader = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background-image: url(${spinner});
  background-size: contain;
  border: none;
  background-color: transparent;
`;
type GlassCardProps = {
  fullWidth?: boolean;
  transparent?: boolean;
};
export const GlassCard = styled.div<GlassCardProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  display: inline-block;
  border-radius: 10px;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#ffffff4d"};
  padding: 10px;
  margin-bottom: 10px;
`;
type FormSectionTitleProps = {
  offsetLeft?: number;
  marginBottom?: number;
};
export const FormSectionTitle = styled.h2<FormSectionTitleProps>`
  grid-column: span 12;
  margin-top: 5px;
  width: 100%;
  padding-left: ${(props) => props.offsetLeft}px;
  text-transform: uppercase;
  color: #51535e;
  font-weight: 500;
  margin-bottom: ${(props) => props.marginBottom}px;
  font-size: 16px;
`;
export const ButtonsArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
  section {
    display: flex;
  }
`;
type GridContainerProps = {
  transparent?: boolean;
  col?: number;
};
export const GridContainer = styled.div<GridContainerProps>`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: span ${(props) => props.col || 6};
  background-color: ${(props) => props.transparent && "transparent"};
`;
type TGridElement = {
  col?: number;
};
export const GridElement = styled(GlassCard) <TGridElement>`
  grid-column: span ${(props) => props.col || 6};
`;

export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 16px;
    margin-right: 8px;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
type TInlineButtonBase = {
  marginVertical: 'left' | 'right'
}
const InlineButtonBase = styled.span<TInlineButtonBase>`
  padding: 7px 16px;
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  ${props => props.marginVertical === 'left' ? 'margin-left: 10px' : 'margin-right: 10px'}
`;

export const InlineButton: { default: any, danger: any } = {
  default: styled(InlineButtonBase)`
      background: #FFE3A9;
      color: ${colors.gray};
    `,
  danger: styled(InlineButtonBase)`
      background: #FF7979;
      color: #fff;
    `
};

export const Subtitle = styled.span`
  display: block;
  font-size: 12px;
  /* margin-bottom: -5px; */
  margin-top: 10px;
  font-weight: 500;
  color: rgba(37, 39, 51, 0.5);
`;
export const Space = styled.span`
  display: block;
  padding: 9px;
`;

export const FormContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* height: calc(100vh - 200px); */
  box-sizing: border-box;
`;
export const HeadForm = styled.div`
  grid-column: span 12;
`;
export const LeftForm = styled.div`
  grid-column: span 8;
`;
export const FormField = styled.div`
  grid-column: span 4;
`;
export const LeftInner = styled.div``;
export const RighForm = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  grid-column: span 4;
`;
export const Uploads = styled.div`
  display: flex;
  flex-wrap: wrap;
  label {
    margin-right: 10px;
  }
`;
export const FooterForm = styled.div`
  grid-column: span 12;

  align-self: end;
`;

