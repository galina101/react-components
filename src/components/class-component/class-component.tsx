import React from 'react';



/*
    Class components are older
        -They can be messier as well. Class components have state
        -And they can hook into the lifecycle of a component easier
            (state tuned for this...because later on we have tools
                that can let function components have state)

    In general, React devs are shifting away from Class Components into Function Components.
*/
class MyClassComponent extends React.Component{


    render(){

        return (
            <React.Fragment>
                <h1>I am invincible!!! This is my first CLASS component!!!</h1>
            </React.Fragment>
        );
    }
}

export default MyClassComponent;
