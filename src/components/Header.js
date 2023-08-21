import React from "react";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import styled from "@emotion/styled";

const MainHeader = styled.div(
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '17px',
    marginRight: '17px',
    padding: '15px 25px 10px 25px',
    backgroundColor: 'white',
    width: '92vw',
    height: '120px',
    borderRadius: '4px',
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 18px rgb(189 37 37 / 6%)',
    paddingRight: '15px', paddingLeft: '15px',
  }
)
const RepositoryBack = styled.div({
  color: "#a4a4a4",
  cursor: "pointer",
  fontSize: "13px",
  textAlign: "right",
  display: "flex",
  flexDirection: "row",
  width: "auto",
  height: "15px"
})

const H3 = styled.h3({
  fontSize: "24px",
  color: '#333',
  fontWeight: '300',
  margin: '0',
  padding: '0',
  marginBlockStart: '0',
  marginBlockEnd: '0',
  marginTop: '7px',
})
const P = styled.p({
  margin: "0 0 10px",
})
const RepositoryBackCen = styled.div({
  marginRight: '10px',
  fontSize: '14px',
  '&:hover,&:focus': {
    color: '#fc8711',
  }
})
const Icon = {
  fontSize: '19px !important', fontWeight: '500',
}

export const Header = () => {
  return (
    <MainHeader>
      <div>
        <RepositoryBack>
          <KeyboardBackspaceSharpIcon style={Icon}
          />
          Repository List
        </RepositoryBack>
        <H3>Peter Petrino</H3>
        <P>Bigham Jewelers </P>
      </div>
      <RepositoryBack>
        <RepositoryBackCen>Create Lead</RepositoryBackCen>
        <RepositoryBackCen>Next</RepositoryBackCen>
      </RepositoryBack>
    </MainHeader>
  );
};
