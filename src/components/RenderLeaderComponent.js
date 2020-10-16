import React from 'react'
import {Media} from 'reactstrap'
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderLeader(props){

    const leaders1 = props.leaders.leaders.map((leader) => {
        return(
          <Fade in>
            <div key={leader.id}>
                <Media tag="li">
                  <Media left middle>
                      <Media object src={baseUrl + leader.image} alt={leader.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.description}</p>
                  </Media>
                </Media>
            </div>
            </Fade>
        );
    });

    if(props.leaders.isLoading) {
      return (
          <div className="container">
              <div className="row">
                  <Loading />
              </div>
          </div>
      );
  }
  else if(props.leaders.errMess) {
      return (
          <div className="container">
              <div className="row">
                  <h4>{props.leaders.errMess}</h4>
              </div>
          </div>
      );
  }
  else
  {
    return(
      <div className="container">
      <div className="row">
        <Media list>
          <Stagger in>
            {leaders1}
            </Stagger>
        </Media>
      </div>
    </div>
);
  }
    
    
}

export default RenderLeader;