import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GithubImage from './images/github.jpg'
import {Container, Row, Col} from 'react-bootstrap'
import './css/BlogpostStyles.css'


function AdvancedGit() {
    return (
     
     <div className="main-1" id="advancedgit">
    <Container>
    <Row>
    <h1>ADVANCED GIT</h1>
    </Row>
    </Container>
    <Container>
    <Row>
    <Col>
     <h2>Git Rebase</h2>
     <ul>
     <li className="A">Question 1: What is a git rebase?</li>
     <li>A git rebase is the act of collecting commits and adding them to a new base commit.</li> 
     <li className="A">Question 2: What are some advantages and disadvantages of git rebase? (At least 2 each)</li>
    <li>Advantage 1: Linear Organization,</li> 
     <li>Advantage 2: Can keep track of all commits from multiple programmers,</li> 
     <li>Disadvantage 1: Not good for public branches</li>
     <li>Disadvantage 2: Not all can see it in private branches</li>
     </ul>
     </Col>
     <Col>
     <figure className="github"><img src={GithubImage} alt="Github"></img></figure>
     </Col>
     </Row>
     <Row>
    <Col>
    <ul>
     <li className="A">Question 3: When shouldn't you use git rebase? Why?</li> 
     <li>Git rebase is great for private branches because the individual can keep track of their 
     commits. If it gets published on a public branch, it only updates the individual's repo. The rest 
     of the team will continue to work on the master branch of the project. This will create a pull nightmare 
     for the individual and others. </li>
     </ul>
     </Col>
     </Row>
     </Container>
     <Container>
       <Row>
      <h2>Git Reset, Checkout, and Revert</h2>
      </Row>
      <Row>
     <ul>
     <li className="A">Question 4: What is git reset?</li> 
     <li className="A">Question 5: What is git checkout?</li>
     <li className="A">Question 6: What is git revert?</li> 
     <li className="A">Question 7: In what ways are these commands the same and in what ways are they different?</li> 
     <li className="A">Question 8: When would you use reset, checkout, or revert? Why?</li> 
     </ul>
     </Row>
     </Container>
     <Container>
      <Row>
     <h2>Git Submodules</h2>
     </Row>
     <Row>
     <ul>
       <li className="A">Question 9: What are git submodules?</li> 
        <li className="A">Question 10: When would you use a submodule?</li> 
        <li className="A">Question 11: What are the advantages and disadvantages of git submodules?</li> 
      </ul>
     </Row>
     </Container>
     </div>
    );
  }
  
  export default AdvancedGit;
  