import styled from "@emotion/styled";

export const TicketStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  text-align: left;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='280' fill='none' viewBox='0 0 600 280'><g filter='url(%23a)'><mask id='d' fill='%23fff'><path fill-rule='evenodd' d='M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z' clip-rule='evenodd'/></mask><path fill='url(%23b)' fill-rule='evenodd' d='M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z' clip-rule='evenodd'/></g><defs><linearGradient id='b' x1='610' x2='69.328' y1='26.462' y2='306.194' gradientUnits='userSpaceOnUse'><stop stop-color='%23fff' stop-opacity='.3'/><stop offset='1' stop-color='%23fff' stop-opacity='.1'/></linearGradient><filter id='a' width='680' height='360' x='-40' y='-40' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feGaussianBlur in='BackgroundImageFix' stdDeviation='20'/><feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_107_802'/><feBlend in='SourceGraphic' in2='effect1_backgroundBlur_107_802' result='shape'/></filter></defs></svg>");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LogoTicket = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 32px;
`;

export const TicketIconThumb = styled.div`
  margin-right: 12px;
`;

export const DateCon = styled.div`
  text-align: left;

  & > h4 {
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: 700;
  }

  & > p {
    font-size: 14px;
    line-height: 1.2;
    color: #d1d0d5;
  }
`;

export const TicketPersonCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TicketAvatarThumb = styled.div`
  width: 45px;
  height: 45px;

  overflow: hidden;

  border-radius: 8px;

  margin-right: 12px;
`;

export const PersonDataCon = styled.div`
  & > h3 {
    margin-bottom: 4px;

    font-size: 20px;
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: 500;
  }

  & > p {
    position: relative;

    padding-left: 20px;

    font-size: 14px;
    line-height: 1.2;

    color: #d1d0d5;

    &:before {
      position: absolute;
      top: 0;
      left: 0;

      display: inline-block;
      content: "";

      width: 16px;
      height: 16px;

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='23' fill='none' viewBox='0 0 22 23'%3E%3Cpath fill='%23D1D0D5' fill-rule='evenodd' d='M13.022 15.221c.08.268.11.55.088.833l.002.44a.66.66 0 0 1-1.32 0v-.492c.025-.336-.074-.61-.276-.821a.66.66 0 0 1 .405-1.112c1.536-.17 2.559-.704 2.559-2.763 0-.515-.196-1.004-.55-1.375a.66.66 0 0 1-.142-.687c.108-.29.14-.598.096-.897-.225.076-.578.233-1.064.559a.66.66 0 0 1-.542.088 5.81 5.81 0 0 0-3.071 0 .66.66 0 0 1-.543-.088c-.48-.322-.831-.48-1.064-.556-.043.299-.01.606.096.895a.66.66 0 0 1-.14.684c-.359.377-.554.87-.551 1.39 0 2.032 1.027 2.576 2.568 2.768a.66.66 0 0 1 .394 1.112.992.992 0 0 0-.276.756l.001.475c0 .29-.192.549-.47.632a4.082 4.082 0 0 1-1.164.189c-1.22 0-1.799-.735-2.177-1.216-.157-.199-.319-.404-.43-.43a.66.66 0 0 1 .32-1.282c.55.137.867.54 1.147.895.377.478.64.817 1.449.691a2.174 2.174 0 0 1 .096-.683c-1.18-.31-2.778-1.177-2.778-3.904a3.296 3.296 0 0 1 .659-2 3.125 3.125 0 0 1 .17-1.948A.661.661 0 0 1 6.936 7c.192-.058.899-.166 2.214.648a7.105 7.105 0 0 1 3.186 0c1.315-.813 2.021-.704 2.213-.648a.66.66 0 0 1 .42.373c.267.62.325 1.3.172 1.949.428.57.66 1.26.66 1.984 0 2.76-1.596 3.617-2.778 3.915Zm1.252-11.853H6.846c-2.912 0-4.866 2.05-4.866 5.086v6.987c0 3.045 1.954 5.087 4.866 5.087h7.428c2.912 0 4.866-2.042 4.866-5.087V8.454c0-3.036-1.954-5.086-4.866-5.086Z' clip-rule='evenodd'/%3E%3C/svg%3E");

      background-size: cover;
    }
  }
`;


export const TicketNumber = styled.div`
& > p{
    transform: rotate(90deg);
}
`