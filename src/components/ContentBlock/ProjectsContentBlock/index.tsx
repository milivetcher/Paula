import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import about from '../../../img/about.png';
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import './styles.css';


const ProjectsContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
 
  return (
    <>
        <Row justify="space-between" align="middle" id={id}>
 
            <ContentWrapper>
              <div style={{ textAlign: 'center', width:'90vw' }}  className="text-center">
                <h5>{t(title)}</h5>

                
              <div id="carouselExampleCaptions" className="carousel slide carousel-dark">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active myDiv" >
                    <img src={about} width="400" height="400"/>
                    <div className="carousel-caption d-none d-md-block myText">
                    <div className="">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item myDiv">
                  <img src={about} width="400" height="400"/>
                    <div className="carousel-caption d-none d-md-block myText">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item myDiv">
                  <img src={about} width="400" height="400"/>
                    <div className="carousel-caption d-none d-md-block myText">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
                
            
              </div>
            </ContentWrapper>

        </Row>
    </>
  );
};

export default withTranslation()(ProjectsContentBlock);
