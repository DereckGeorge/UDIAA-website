import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './faq.css';

const faqContainer =() => {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Who can join UDIAA?" >
        UDIAA welcomes a diverse membership, including students who are 
        interested in the field of internal auditing. We believe in 
        inclusivity and the opportunity for students to learn and grow in 
        this profession. Therefore, we allow any student who shares an 
        interest in internal auditing to become a member, regardless of 
        their academic level or major. We encourage students to take 
        advantage of the resources and networking opportunities available
        within our association to further their knowledge and career prospects
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Do you have membership fees?">
        Yes, we do have membership fees; however, our aim is to make membership 
        accessible and student-friendly. We understand the financial constraints 
        that many students face, and our fee structure is designed to be affordable. 
        Our goal is to provide valuable resources, networking opportunities, and 
        support to students interested in internal auditing without creating a 
        significant financial burden. The membership fee helps us sustain and improve 
        the services we offer, ensuring that students can access the benefits of UDIAA.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="What activities do you do in your associaton?">
        UDIAA is a dynamic association engaged in a wide range of activities. We host auditing events, 
        providing valuable insights and knowledge sharing opportunities for our members. Beyond 
        professional development, we are passionate about giving back to the community through 
        charitable initiatives. Networking is at the heart of what we do, connecting students and 
        professionals in the field. Our commitment to continuous learning is reflected in our training 
        and workshops, ensuring that our members stay at the forefront of industry best practices.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What are the benefits of joining UDIAA?">
        UDIAA offers a multitude of benefits to students interested in the auditing field. 
        We provide unique opportunities for students to gain hands-on experience, insight, 
        and exposure in the world of auditing. Additionally, our association fosters the 
        growth of a valuable professional network, connecting students with industry experts 
        and like-minded peers. Cooperation is also central to our mission, encouraging 
        collaboration and knowledge-sharing that enhances each student's journey in the 
        auditing field.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="What networking opportunities can UDIAA offer?">
        UDIAA offers extensive networking opportunities that extend beyond traditional boundaries. 
        We prioritize cooperation and the establishment of friendships with other colleges and 
        universities, contributing to the growth of a vast and diverse professional network. 
        Additionally, our events provide a platform to meet new faces in the field, fostering 
        connections and relationships with experts, peers, and potential mentors, ultimately enriching 
        your network and professional journey
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
};

export default faqContainer;