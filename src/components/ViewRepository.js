import React from "react";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { MainArea } from "./MainArea";
import styled from "@emotion/styled";

const ViewRepositoryBox = styled.div({
  display: ' flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  overflowX: ' hidden',
  width: '100%',
  height: '100%',
})
const MainView = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: '80px',
  width: '100vw',
  height: '100vw',
})
const ViewRepository = () => {
  return (
    <ViewRepositoryBox>
      <NavBar />
      <MainView>
        <Header />
        <MainArea />
      </MainView>
    </ViewRepositoryBox>
  );
};

export default ViewRepository;
