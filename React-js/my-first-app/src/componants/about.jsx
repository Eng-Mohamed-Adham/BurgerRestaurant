import React from 'react';
import { Route,Link } from 'react-router-dom';
import Team from './team';
import Company from './company';

const About = () => {
    return ( 
      <React.Fragment>
            <h1>About</h1>
            <div className="row">
                <div className="col-3">
                <ul>
            <li><Link to='/about/team'>Our Team</Link></li>
            <li><Link to='/about/company'>Our company</Link></li>
        </ul>
                </div>
                <div className="col">
                    <Route path='/about/team' component={Team}/>
                    <Route path='/about/company' component={Company}/>

                </div>
            </div>
        
      </React.Fragment>




     );
}
 
export default About;