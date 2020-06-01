import React from "react";
import Container from "../../../utilis/container";
import Box from "../../../utilis/Box";
import Card from "../../../utilis/Card";
import SmallBox from "../../../utilis/BigCard";
import Card2 from "../../../utilis/Card2";

function IndividualCourse() {
  return (
    <Container>
      <Box>
        <div className="IndividualCourseCard">
          <div className="CourseTitle">
            <i class="fa fa-hexagon"></i>
            <ul>
              <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
            </ul>
          </div>
          <div className="platfrom">
            <ul>
              <li>Platfrom Coursera</li>
            </ul>
          </div>
          <div class="CourseButton">
            <button onClick={() => alert("hii")}>Free</button>
          </div>
        </div>
        <SmallBox>
          <Card2>
            <div
              // className="des"
              style={{ textAlign: "start", fontWeight: "bold" }}>
              Description:
            </div>
            HTML Reference CSS Reference JavaScript Reference SQL Reference
            Python Reference W3.CSS Reference Bootstrap Reference
          </Card2>
          {/* </div> */}
          <Card2>
            <div style={{ fontWeight: "bold" }}>
              Sample of reported job titles
            </div>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </Card2>
          {/* </div> */}
          <Card2>
            <div className="skill" style={{ fontWeight: "bold" }}>
              Skills:
            </div>
            Active listening Communication Computer skills Customer service
            Interpersonal skills Leadership Management skills Problem-solving
            Time management
          </Card2>
          {/* </div> */}

          {/* Related courses */}
          <Card2>
            <div style={{ fontWeight: "bold", display: "grid" }}>
              Related Courses:
              <div className="RelatedCourse">
                <div className="CourseCard">
                  <div className="CourseTitle">
                    <i class="fa fa-hexagon"></i>
                    <ul>
                      <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
                    </ul>
                  </div>
                  <div className="platfrom">
                    <ul>
                      <li>Platfrom Coursera</li>
                      <li>Duration 6 months</li>
                    </ul>
                  </div>
                  <div class="CourseButton">
                    <button onClick={() => alert("hii")}>Free</button>
                  </div>
                </div>
                <div className="CourseCard">
                  <div className="CourseTitle">
                    <i class="fa fa-hexagon"></i>
                    <ul>
                      <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
                    </ul>
                  </div>
                  <div className="platfrom">
                    <ul>
                      <li>Platfrom Coursera</li>
                      <li>Duration 6 months</li>
                    </ul>
                  </div>
                  <div class="CourseButton">
                    <button onClick={() => alert("hii")}>Free</button>
                  </div>
                </div>
                <div className="CourseCard">
                  <div className="CourseTitle">
                    <i class="fa fa-hexagon"></i>
                    <ul>
                      <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
                    </ul>
                  </div>
                  <div className="platfrom">
                    <ul>
                      <li>Platfrom Coursera</li>
                      <li>Duration 6 months</li>
                    </ul>
                  </div>
                  <div class="CourseButton">
                    <button onClick={() => alert("hii")}>Free</button>
                  </div>
                </div>
              </div>
            </div>
          </Card2>
        </SmallBox>
      </Box>
    </Container>
  );
}

export default IndividualCourse;
