import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
 

const  Footer = () => {
   return (
        <footer className="footer">
           <Container>
           
            <Row className="align-item-center">
            
               <MailchimpForm/>
                    
                    <Col size={12} sm={6}>
  
                    <div className="social-icon ">
              <a href="https://www.linkedin.com/in/kaninika-sen-choudhuri-2a6b101b7/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Kaninika011"><img src={navIcon2} alt="Icon" /></a>
              <a href='https://www.instagram.com/_kaninika_'> <img src ={navIcon3} alt=""/> </a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
              </Col>
           
            </Row>
            </Container> 
        </footer>
    )
 }
 export default Footer; 