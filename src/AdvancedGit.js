import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './css/BlogpostStyles.css'
import CreateRebase from './images/createrebase.PNG'
import GitRebaseMerge from './images/gitrebasemerge.PNG'
import GitReset from './images/gitreset.PNG'
import GitCheckout from './images/gitcheckout.PNG'
import GitRevert from './images/gitrevert.PNG'


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
      </ul>
      </Col>
      <Col>
     <figure className="github"><img src={CreateRebase} alt="Github"></img></figure>
     </Col>
      </Row>
      </Container>
      <Container>
        <Row>
        <Col>
        <ul>
     <li className="A">Question 2: What are some advantages and disadvantages of git rebase? (At least 2 each)</li>
   </ul>
   </Col>
   </Row>
   <Row>
     <Col>
     <ul>
    <li>Advantage 1: Linear Organization,</li> 
     <li>Advantage 2: Can keep track of all commits from multiple programmers,</li> 
      </ul>
      </Col>
      <Col>
      <ul>
     <li>Disadvantage 1: Not good for public branches</li>
     <li>Disadvantage 2: Not all can see it in private branches</li>
     </ul>
     </Col>
     </Row>
     </Container>
     <Container>
     <Row>
    <Col>
    <ul>
     <li className="A">Question 3: When shouldn't you use git rebase? Why?</li> 
    
    </ul>
    </Col>
    </Row>
    <Row>
    <Col>
    <ul>
     <li>Git rebase is great for private branches because the individual can keep track of their 
     commits. If it gets published on a public branch, it only updates the individual's repo. The rest 
     of the team will continue to work on the master branch of the project. This will create a pull nightmare 
     for the individual and others. </li>
     </ul>
     </Col>
     <Col>
     <figure className="github"><img src={GitRebaseMerge} alt="Github"></img></figure>
     </Col>
     </Row>
     </Container>
     <Container>
       <Row>
      <h2>Git Reset, Checkout, and Revert</h2>
      </Row>
      <Row>
      <Col>
     <figure className="github"><img src={GitReset} alt="Github"></img></figure>
     </Col>
      <Col>
     <ul>
     <li className="A">Question 4: What is git reset?</li> 
     <li>A git reset is an incredible command where individuals can undo local changes.</li>
     <li className="A">Question 5: What is git checkout?</li>
     <li>A git checkout allows individuals to switch between branches.</li>
     </ul>
     </Col>
     </Row>
     <Row>
     <Col>
     <ul>
     <li className="A">Question 6: What is git revert?</li> 
     <li>A git revert is a safer way of a git reset as it will make the change but keep it as a commit instead of deleting it altogether.</li>
      </ul>
     </Col>
    </Row>
    <Row>
      
    <Col>
    <ul>
     <li className="A">Question 7: In what ways are these commands the same and in what ways are they different?</li> 
   
     </ul>
     </Col>
     </Row>
     <Row>
      <Col>
   <ul>
     <li>Git reset and git revert are similiar because they involve removing a previous command. They differ because git revert keeps
       the command history and creates a new commit while git reset is deleting the previous command altogether. Git checkout is entirely 
       different from git reset and git revert because it just allows the individual to essentially checkout commands to a different 
       branch.
     </li>
     </ul>
     </Col>
     <Col>
     <figure className="github"><img src={GitCheckout} alt="Github"></img></figure>
     </Col>
     </Row>
     <Row>
      <Col>
    <ul>
    <li className="A">Question 8: When would you use reset, checkout, or revert? Why?</li> 
    
    
    </ul>
    </Col>
    </Row>
    <Row>
    <Col>
    <ul>
     <li>In the command world, reset is extremely important when I make a command mistake and no longer wish to keep it. 
       Checkout is very helpful when I want to add project info to separate branches rather than the main branch. Sometimes it is important 
       to keep my code separate from everyone elses, especially if I test my development. Revert is a much safer and cleaner version of 
       reset as it allows me to keep track of all of my changes, even when I no longer need that specific command. 
     </li>
    </ul>
    </Col>
    <Col>
     <figure className="github"><img src={GitRevert} alt="Github"></img></figure>
     </Col>
     </Row>
     
     </Container>
     <Container>
      <Row>
     <h2>Git Submodules</h2>
     </Row>
     <Row>
     <ul>
       <li className="A">Question 9: What are git submodules?</li> 
       <li>Git submodules are essentially subprojets in the main git project. In other words, a repo within a repo.</li>
        <li className="A">Question 10: When would you use a submodule?</li> 
        <li>Git submodules are extremely useful when sharing code. It is a great version control to keep track of all of your changes.</li>
        <li className="A">Question 11: What are the advantages and disadvantages of git submodules?</li> 
        <li>Submodule Advantages: Linear repo organization</li>
        <li>Submodule Disadvantages: Teams will have to make sure each submodule is up-to-date rather than update one main repo.</li>
      </ul>
     </Row>
     </Container>
     
     </div>
    );
  }
  
  export default AdvancedGit;
  