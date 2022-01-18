import React, { useState } from "react";

export default function About() {
  let mystyle = {
    color: "white",
    backgroundColor: "black",
  };
  const [myStyle, setMystyle] = useState(mystyle);
  const [btnTxt, setBtnTxt] = useState("Enable Dark Mode");

  const toggleStyle =()=>{
    if(myStyle.color=='white'){
        setMystyle({
            color:'black',
            backgroundColor:'white'
        }
        
        )
        setBtnTxt("Enable Dark Mode")
   
    }
    else{
        setMystyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnTxt("Enable Light Mode")

    }

  }

  return (
    <div className="container mt-3 my-3" style={myStyle}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-light me-md-2 mt-2" onClick= {toggleStyle}type="button">{btnTxt}</button>
  {/* <button className="btn btn-primary" type="button">Button</button> */}
</div>
      <h1>About US</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
