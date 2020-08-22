import React from 'react'
import {Media} from 'reactstrap'

function RenderLeader(props){

    const leaders1 = props.leaders.map((leader) => {
        return(
            <div key={leader.id}>
                <Media tag="li">
                  <Media left middle>
                      <Media object src={leader.image} alt={leader.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.description}</p>
                  </Media>
                </Media>
            </div>
        );
    });

    return(
            <div className="container">
            <div className="row">
              <Media list>
                  {leaders1}
              </Media>
            </div>
          </div>
    );
    
}

export default RenderLeader;