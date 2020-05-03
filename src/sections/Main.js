import React from "react";

class Main extends React.Component{
    render(){
        return(
            <main className="offset-md-2 col-12 col-md-10">
                {this.props.children}
            </main>
        )

    }
}

export default Main;