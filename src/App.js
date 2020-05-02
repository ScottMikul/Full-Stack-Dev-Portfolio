import React from 'react';
import {TopNav, Container, SideNav, Main, Header, About,Technologies,Projects, Footer} from "./sections";


function App() {
  return (
    <div className="App">
      <TopNav />
      {/* <Container>
        <SideNav></SideNav>
        <Main>
          <Header />
          <About />
          <Projects />
          <Technologies />
          <Footer />
        </Main>


      </Container> */}
      <div className="jumbotron">Helloooo</div>
    </div>
  );
}

export default App;
