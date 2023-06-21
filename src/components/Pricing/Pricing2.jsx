import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";









const Pricing2 = () => {
  return (
    <>
<div className="width-pricing">
  <div className="container w-75 pb-5 pt-5">
    <h5 className="d-flex justify-content-center font-weight-bold text-center">
      FREQUENTLY ASKED QUESTIONS
    </h5>
    <hr className=" mb-4 border-success hr-indicator" />
    <div className="row">
      <div className="col">
        <div className="faq_div">
          <div className="faq_collapse_div">
            <button
              id="btn1"
              className="bg-white d-flex border-0 p-3 faq_collapse_btn"
              onclick="rotateArrow1()"
              type="button"
              data-toggle="collapse"
              data-target="#faq_when_collapse1"
            >
              <span className="mr-auto">
                <FontAwesomeIcon className="text-muted" icon={faCircleQuestion}/>   
                &nbsp;&nbsp;
                <span id="btn_text1">
                  Non consectetur a erat nam at lectus urna duis?
                </span>
              </span>
              <FontAwesomeIcon className="fa-sharp text-muted" icon={faChevronDown}/>
            </button>
            <div
              id="faq_when_collapse1"
              className="pr-3 pl-3 pb-3 collapse bg-white"
            >
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna portitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="faq_div">
          <div className="faq_collapse_div">
            <button
              id="btn2"
              className="bg-white d-flex border-0 p-3 mt-3 faq_collapse_btn"
              onclick="rotateArrow2()"
              type="button"
              data-toggle="collapse"
              data-target="#faq_when_collapse2"
            >
              <span className="mr-auto">
                <FontAwesomeIcon className="text-muted" icon={faCircleQuestion}/>
                &nbsp;&nbsp;
                <span id="btn_text2">
                  Feugiat scelerisque varius morbi enim nunc?
                </span>
              </span>
              <FontAwesomeIcon className="text-muted" icon={faChevronDown}/>
            </button>
            <div
              id="faq_when_collapse2"
              className="pr-3 pl-3 pb-3 collapse bg-white"
            >
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna portitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="faq_div">
          <div className="faq_collapse_div">
            <button
              id="btn3"
              className="bg-white d-flex border-0 p-3 mt-3 faq_collapse_btn"
              onclick="rotateArrow3()"
              type="button"
              data-toggle="collapse"
              data-target="#faq_when_collapse3"
            >
              <span className="mr-auto">
              <FontAwesomeIcon className="text-muted" icon={faCircleQuestion}/>
                &nbsp;&nbsp;
                <span id="btn_text3">
                  Dolor sit amet consectetur adipiscing elit?
                </span>
              </span>
              <FontAwesomeIcon className="text-muted" icon={faChevronDown}/>
            </button>
            <div
              id="faq_when_collapse3"
              className="pr-3 pl-3 pb-3 collapse bg-white"
            >
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna portitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="faq_div">
          <div className="faq_collapse_div">
            <button
              id="btn4"
              className="bg-white d-flex border-0 p-3 mt-3 faq_collapse_btn"
              onclick="rotateArrow4()"
              type="button"
              data-toggle="collapse"
              data-target="#faq_when_collapse4"
            >
              <span className="mr-auto">
              <FontAwesomeIcon className="text-muted" icon={faCircleQuestion}/>
                &nbsp;&nbsp;
                <span id="btn_text4">
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </span>
              </span>
              <FontAwesomeIcon className="text-muted" icon={faChevronDown}/>
            </button>
            <div
              id="faq_when_collapse4"
              className="pr-3 pl-3 pb-3 collapse bg-white"
            >
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna portitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="faq_div">
          <div className="faq_collapse_div">
            <button
              id="btn5"
              className="bg-white d-flex border-0 p-3 mt-3 faq_collapse_btn"
              onclick="rotateArrow5()"
              type="button"
              data-toggle="collapse"
              data-target="#faq_when_collapse5"
            >
              <span className="mr-auto">
              <FontAwesomeIcon className="text-muted" icon={faCircleQuestion}/>
                &nbsp;&nbsp;
                <span id="btn_text5">
                  Tortor vitae purus faucibus ornare. Varius vel pharetra val
                  turpis nunc eget lorem dolor?
                </span>
              </span>
              <FontAwesomeIcon className="text-muted" icon={faChevronDown}/>
            </button>
            <div
              id="faq_when_collapse5"
              className="pr-3 pl-3 pb-3 collapse bg-white"
            >
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna portitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  );
}


export default Pricing2;
