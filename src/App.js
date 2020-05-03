import React from 'react';
import {TopNav, SideNav, Main, Header, About,Technologies,Projects, Footer} from "./sections";


function App() {
  return (
    <div className="App">
      <TopNav />
     <div className="container-fluid">
        <div className="row">

        <SideNav></SideNav>

        <Main>


          <Header />
            <About />
            <Projects />
            <Technologies />         
            <Footer />
        </Main>
        

        </div>
      </div> 
    </div>
  );
}

export default App;
