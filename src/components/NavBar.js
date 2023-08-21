import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AppsIcon from "@mui/icons-material/Apps";
import styled from "@emotion/styled";



const NavBarFlexProp = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
})
const NavBarMain = styled(NavBarFlexProp)`
justify-content: space-between;
flex-direction: row;
top: 0;
width: 95vw;
height: 64px;
background: rgb(13, 71, 161);
background: linear-gradient(
  90deg,
  rgba(13, 71, 161, 1) 0%,
  rgba(54, 107, 201, 1) 100%
);
padding-left: 15px;
padding-right: 15px;
position: fixed;
z-index: 1;
box-shadow: 0px 4px 18px rgb(189 37 37 / 6%);
`;


const NavBarLogo = styled(NavBarFlexProp)`
  height: 64px;
`;
const NavBarContents = styled(NavBarFlexProp)`
justify-content: space-evenly;
flex-direction: row;
`;

const NavBarUl = styled(NavBarContents)`
list-style: none;
color: white;
`;

const NavBarLi = styled.li({

  padding: "1px 15px",
  cursor: "pointer",

  '&:hover,&:focus': {
    color: " #9fb3d7",
    borderRadius: " 50%",

  }
})
const NavBarCon = styled(NavBarContents)`
color: white;
  margin-right: 30px;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
`;


export const NavBar = () => {
  const icons = [<SearchIcon />, <AddCircleOutlineIcon />, <NotificationImportantIcon />, <AppsIcon />];

  return (
    <NavBarMain>
      <NavBarLogo>
        <svg
          width="204"
          height="39"
          fontSize="14px"
          viewBox="0 0 204 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9169 21.1804H2.49365C2.91689 25.2289 5.60118 27.4987 9.20821 27.4987C11.6637 27.4987 13.8524 26.3236 15.042 24.2591L17.1505 25.2289C15.5758 28.2673 12.5064 29.9656 9.13195 29.9656C4.06839 29.9656 0 26.0378 0 20.0455C0 14.0533 4.06839 10.2462 9.13195 10.2462C14.2336 10.2462 17.9551 14.0533 17.9551 20.0455C17.9551 20.4118 17.9551 20.8182 17.9169 21.1804ZM15.5377 18.9549C15.1907 15.0272 12.6208 12.7172 9.13195 12.7172C5.60118 12.7172 2.99314 14.9024 2.53178 18.9549H15.5377Z"
            fill="white"
          ></path>
          <path
            d="M38.6744 0V29.563H36.2189V25.8767C34.8768 28.4724 32.0743 29.9694 29.0811 29.9694C24.0938 29.9694 19.9873 25.8404 19.9873 20.0896C19.9873 14.3388 24.0557 10.2501 29.0811 10.2501C32.1124 10.2501 34.873 11.7471 36.2189 14.2986V0H38.6744ZM36.2189 20.1701C36.2189 15.5944 32.8445 12.717 29.2756 12.717C25.516 12.717 22.4466 15.8761 22.4466 20.0454C22.4466 24.2589 25.516 27.4985 29.2756 27.4985C32.997 27.4985 36.2189 24.5446 36.2189 20.1701Z"
            fill="white"
          ></path>
          <path
            d="M59.1995 10.6526V26.7701C59.1995 35.9215 55.3256 39.0002 49.4918 39.0002C46.4605 39.0002 43.5055 37.4629 41.7401 34.3842L43.8105 33.1689C45.1146 35.3944 47.3413 36.5292 49.488 36.5292C53.8614 36.5292 56.7402 34.179 56.7402 26.8909V25.917C55.398 28.4684 52.5955 29.9655 49.6024 29.9655C44.6151 29.9655 40.5085 25.8365 40.5085 20.0857C40.5085 14.3348 44.5769 10.2461 49.6024 10.2461C52.6336 10.2461 55.3942 11.7432 56.7402 14.2946V10.6485H59.1995V10.6526ZM56.744 20.1702C56.744 15.5945 53.3695 12.7171 49.8006 12.7171C46.0411 12.7171 42.9717 15.8762 42.9717 20.0454C42.9717 24.2589 46.0411 27.4986 49.8006 27.4986C53.522 27.4986 56.744 24.5447 56.744 20.1702Z"
            fill="white"
          ></path>
          <path
            d="M78.9618 21.1803H63.5386C63.9618 25.2288 66.6461 27.4985 70.2531 27.4985C72.7087 27.4985 74.8973 26.3234 76.0869 24.2589L78.1954 25.2288C76.6207 28.2672 73.5513 29.9655 70.1769 29.9655C65.1133 29.9655 61.0449 26.0377 61.0449 20.0454C61.0449 14.0531 65.1133 10.2461 70.1769 10.2461C75.2786 10.2461 79 14.0531 79 20.0454C79 20.4116 79 20.8181 78.9618 21.1803ZM76.5826 18.9548C76.2356 15.027 73.6657 12.7171 70.1769 12.7171C66.6461 12.7171 64.0381 14.9023 63.5767 18.9548H76.5826Z"
            fill="white"
          ></path>
          <path
            d="M93.78 29.108C93.116 29.108 92.516 29.024 91.98 28.856C91.444 28.68 90.98 28.428 90.588 28.1L90.936 27.308C91.344 27.62 91.772 27.852 92.22 28.004C92.668 28.156 93.188 28.232 93.78 28.232C94.5 28.232 95.032 28.1 95.376 27.836C95.728 27.564 95.904 27.208 95.904 26.768C95.904 26.416 95.776 26.136 95.52 25.928C95.272 25.72 94.852 25.556 94.26 25.436L93.012 25.184C92.26 25.024 91.696 24.764 91.32 24.404C90.952 24.036 90.768 23.548 90.768 22.94C90.768 22.436 90.896 21.996 91.152 21.62C91.416 21.244 91.78 20.952 92.244 20.744C92.708 20.536 93.244 20.432 93.852 20.432C94.42 20.432 94.948 20.524 95.436 20.708C95.924 20.884 96.336 21.14 96.672 21.476L96.324 22.244C95.964 21.916 95.584 21.68 95.184 21.536C94.784 21.384 94.336 21.308 93.84 21.308C93.208 21.308 92.704 21.456 92.328 21.752C91.952 22.04 91.764 22.424 91.764 22.904C91.764 23.288 91.88 23.592 92.112 23.816C92.352 24.04 92.74 24.204 93.276 24.308L94.524 24.572C95.332 24.74 95.928 24.996 96.312 25.34C96.704 25.676 96.9 26.136 96.9 26.72C96.9 27.192 96.772 27.608 96.516 27.968C96.268 28.328 95.908 28.608 95.436 28.808C94.972 29.008 94.42 29.108 93.78 29.108ZM98.2948 21.716V20.624H99.4948V21.716H98.2948ZM98.4148 29V23.168H99.3868V29H98.4148ZM101.348 29V23.168H102.296V24.152C102.472 23.8 102.716 23.532 103.028 23.348C103.34 23.156 103.704 23.06 104.12 23.06C105.032 23.06 105.616 23.456 105.872 24.248C106.048 23.88 106.308 23.592 106.652 23.384C106.996 23.168 107.392 23.06 107.84 23.06C109.136 23.06 109.784 23.828 109.784 25.364V29H108.812V25.412C108.812 24.876 108.716 24.484 108.524 24.236C108.34 23.98 108.032 23.852 107.6 23.852C107.128 23.852 106.752 24.02 106.472 24.356C106.192 24.692 106.052 25.14 106.052 25.7V29H105.08V25.412C105.08 24.876 104.984 24.484 104.792 24.236C104.608 23.98 104.3 23.852 103.868 23.852C103.388 23.852 103.008 24.02 102.728 24.356C102.456 24.692 102.32 25.14 102.32 25.7V29H101.348ZM111.721 31.16V23.168H112.669V24.212C112.845 23.852 113.105 23.572 113.449 23.372C113.801 23.164 114.209 23.06 114.673 23.06C115.193 23.06 115.645 23.184 116.029 23.432C116.421 23.672 116.721 24.02 116.929 24.476C117.145 24.924 117.253 25.46 117.253 26.084C117.253 26.7 117.145 27.236 116.929 27.692C116.721 28.14 116.421 28.488 116.029 28.736C115.645 28.984 115.193 29.108 114.673 29.108C114.225 29.108 113.825 29.008 113.473 28.808C113.121 28.608 112.861 28.332 112.693 27.98V31.16H111.721ZM114.469 28.328C115.013 28.328 115.449 28.136 115.777 27.752C116.105 27.36 116.269 26.804 116.269 26.084C116.269 25.356 116.105 24.8 115.777 24.416C115.449 24.032 115.013 23.84 114.469 23.84C113.925 23.84 113.489 24.032 113.161 24.416C112.833 24.8 112.669 25.356 112.669 26.084C112.669 26.804 112.833 27.36 113.161 27.752C113.489 28.136 113.925 28.328 114.469 28.328ZM120.625 29.108C120.033 29.108 119.585 28.936 119.281 28.592C118.985 28.24 118.837 27.732 118.837 27.068V20.54H119.809V26.996C119.809 27.852 120.149 28.28 120.829 28.28C121.029 28.28 121.209 28.256 121.369 28.208L121.345 29.024C121.097 29.08 120.857 29.108 120.625 29.108ZM125.078 29.108C124.158 29.108 123.43 28.84 122.894 28.304C122.358 27.76 122.09 27.024 122.09 26.096C122.09 25.496 122.21 24.968 122.45 24.512C122.69 24.048 123.018 23.692 123.434 23.444C123.858 23.188 124.346 23.06 124.898 23.06C125.69 23.06 126.31 23.316 126.758 23.828C127.206 24.332 127.43 25.028 127.43 25.916V26.288H123.038C123.07 26.952 123.262 27.46 123.614 27.812C123.966 28.156 124.454 28.328 125.078 28.328C125.43 28.328 125.766 28.276 126.086 28.172C126.406 28.06 126.71 27.88 126.998 27.632L127.334 28.316C127.07 28.564 126.734 28.76 126.326 28.904C125.918 29.04 125.502 29.108 125.078 29.108ZM124.922 23.78C124.37 23.78 123.934 23.952 123.614 24.296C123.294 24.64 123.106 25.092 123.05 25.652H126.59C126.566 25.06 126.41 24.6 126.122 24.272C125.842 23.944 125.442 23.78 124.922 23.78ZM128.8 29V27.776H130.024V29H128.8ZM133.205 29V24.992L129.965 20.54H131.117L133.721 24.128L136.313 20.54H137.429L134.189 25.016V29H133.205ZM139.98 29.108C139.06 29.108 138.332 28.84 137.796 28.304C137.26 27.76 136.992 27.024 136.992 26.096C136.992 25.496 137.112 24.968 137.352 24.512C137.592 24.048 137.92 23.692 138.336 23.444C138.76 23.188 139.248 23.06 139.8 23.06C140.592 23.06 141.212 23.316 141.66 23.828C142.108 24.332 142.332 25.028 142.332 25.916V26.288H137.94C137.972 26.952 138.164 27.46 138.516 27.812C138.868 28.156 139.356 28.328 139.98 28.328C140.332 28.328 140.668 28.276 140.988 28.172C141.308 28.06 141.612 27.88 141.9 27.632L142.236 28.316C141.972 28.564 141.636 28.76 141.228 28.904C140.82 29.04 140.404 29.108 139.98 29.108ZM139.824 23.78C139.272 23.78 138.836 23.952 138.516 24.296C138.196 24.64 138.008 25.092 137.952 25.652H141.492C141.468 25.06 141.312 24.6 141.024 24.272C140.744 23.944 140.344 23.78 139.824 23.78ZM146.199 29.108C145.511 29.108 144.995 28.928 144.651 28.568C144.307 28.2 144.135 27.672 144.135 26.984V23.924H142.995V23.168H144.135V21.38H145.107V23.168H146.955V23.924H145.107V26.888C145.107 27.344 145.203 27.692 145.395 27.932C145.587 28.164 145.899 28.28 146.331 28.28C146.459 28.28 146.587 28.264 146.715 28.232C146.843 28.2 146.959 28.168 147.063 28.136L147.231 28.88C147.127 28.936 146.975 28.988 146.775 29.036C146.575 29.084 146.383 29.108 146.199 29.108ZM151.509 29V20.54H154.857C155.769 20.54 156.465 20.76 156.945 21.2C157.433 21.64 157.677 22.268 157.677 23.084C157.677 23.892 157.433 24.52 156.945 24.968C156.465 25.408 155.769 25.628 154.857 25.628H152.493V29H151.509ZM152.493 24.8H154.737C156.049 24.8 156.705 24.228 156.705 23.084C156.705 21.932 156.049 21.356 154.737 21.356H152.493V24.8ZM161.245 29.108C160.677 29.108 160.185 28.984 159.769 28.736C159.353 28.488 159.029 28.14 158.797 27.692C158.573 27.236 158.461 26.7 158.461 26.084C158.461 25.468 158.573 24.936 158.797 24.488C159.029 24.032 159.353 23.68 159.769 23.432C160.185 23.184 160.677 23.06 161.245 23.06C161.805 23.06 162.293 23.184 162.709 23.432C163.133 23.68 163.457 24.032 163.681 24.488C163.913 24.936 164.029 25.468 164.029 26.084C164.029 26.7 163.913 27.236 163.681 27.692C163.457 28.14 163.133 28.488 162.709 28.736C162.293 28.984 161.805 29.108 161.245 29.108ZM161.245 28.328C161.789 28.328 162.225 28.136 162.553 27.752C162.881 27.36 163.045 26.804 163.045 26.084C163.045 25.356 162.881 24.8 162.553 24.416C162.225 24.032 161.789 23.84 161.245 23.84C160.693 23.84 160.253 24.032 159.925 24.416C159.605 24.8 159.445 25.356 159.445 26.084C159.445 26.804 159.605 27.36 159.925 27.752C160.253 28.136 160.693 28.328 161.245 28.328ZM167.075 29L164.903 23.168H165.923L167.567 27.86L169.271 23.168H170.099L171.779 27.872L173.447 23.168H174.419L172.235 29H171.311L169.667 24.476L168.011 29H167.075ZM178.283 29.108C177.363 29.108 176.635 28.84 176.099 28.304C175.563 27.76 175.295 27.024 175.295 26.096C175.295 25.496 175.415 24.968 175.655 24.512C175.895 24.048 176.223 23.692 176.639 23.444C177.063 23.188 177.551 23.06 178.103 23.06C178.895 23.06 179.515 23.316 179.963 23.828C180.411 24.332 180.635 25.028 180.635 25.916V26.288H176.243C176.275 26.952 176.467 27.46 176.819 27.812C177.171 28.156 177.659 28.328 178.283 28.328C178.635 28.328 178.971 28.276 179.291 28.172C179.611 28.06 179.915 27.88 180.203 27.632L180.539 28.316C180.275 28.564 179.939 28.76 179.531 28.904C179.123 29.04 178.707 29.108 178.283 29.108ZM178.127 23.78C177.575 23.78 177.139 23.952 176.819 24.296C176.499 24.64 176.311 25.092 176.255 25.652H179.795C179.771 25.06 179.615 24.6 179.327 24.272C179.047 23.944 178.647 23.78 178.127 23.78ZM182.161 29V23.168H183.109V24.212C183.421 23.508 184.061 23.12 185.029 23.048L185.377 23.012L185.449 23.852L184.837 23.924C184.285 23.972 183.865 24.148 183.577 24.452C183.289 24.748 183.145 25.156 183.145 25.676V29H182.161ZM187.21 29V23.924H186.058V23.168H187.21V22.964C187.21 22.188 187.402 21.6 187.786 21.2C188.178 20.8 188.778 20.576 189.586 20.528L190.054 20.504L190.138 21.248L189.586 21.284C189.09 21.324 188.73 21.472 188.506 21.728C188.29 21.984 188.182 22.356 188.182 22.844V23.168H189.862V23.924H188.182V29H187.21ZM193.079 29.108C191.679 29.108 190.979 28.336 190.979 26.792V23.168H191.951V26.78C191.951 27.3 192.055 27.684 192.263 27.932C192.479 28.18 192.815 28.304 193.271 28.304C193.767 28.304 194.171 28.14 194.483 27.812C194.795 27.476 194.951 27.032 194.951 26.48V23.168H195.923V29H194.975V28.016C194.791 28.368 194.531 28.64 194.195 28.832C193.867 29.016 193.495 29.108 193.079 29.108ZM199.649 29.108C199.057 29.108 198.609 28.936 198.305 28.592C198.009 28.24 197.861 27.732 197.861 27.068V20.54H198.833V26.996C198.833 27.852 199.173 28.28 199.853 28.28C200.053 28.28 200.233 28.256 200.393 28.208L200.369 29.024C200.121 29.08 199.881 29.108 199.649 29.108ZM201.493 29V27.776H202.717V29H201.493Z"
            fill="white"
          ></path>
        </svg>
      </NavBarLogo>
      <NavBarContents>
        <NavBarUl>
          {
            icons.map((ele) => (
              <NavBarLi>{ele}</NavBarLi>
            ))
          }
        </NavBarUl>
        <NavBarCon>Hi, Edge Consultant</NavBarCon>
      </NavBarContents>
    </NavBarMain>
  );
};
