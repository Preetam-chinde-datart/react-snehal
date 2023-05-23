import "./pages/forgotpass1.css";
import "bootstrap";


function Forgotpass1() {
  return (
    <>
    	
  <button
    type="button"
    className="btn btn-primary "
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@mdo"
  >
    Sign Up
  </button>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form
            className="log-in-frm "
            id="loginform"
            action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/login"
            method="post"
          >
            <div className="container frm-con">
              <div className="lock-img text-center ">
                {/* <img src="/images/lock-img.png" alt=""/> */}
				<img src={require("../src/images/lock-img.png")} alt="" />
              </div>
              <h4 className="text-center"> Forgot Password? </h4>
              <p style={{ fontSize: 14 }} className="text-center">
                Don't worry! We've got you covered. Enter your registered email
                below.
              </p>
              <label
                htmlFor="email"
                className="email-lbl"
                style={{ margin: "0rem 1.9rem" }}
              >
                <b>
                  Email Address
                </b>
              </label>
              <br />
              <div className="forgot-email text-center">
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  name="email"
                  className="email"
                  id="email"
                  required=""
                />
                <br />
                <br />
              </div>
              <div className="b text-center">
                <button type="submit" className="submit-btn ">
                  Generate OTP
                </button>
              </div>
			  <div className=" log-link">
                        <p className="text-center login-link ">
                          Go Back to{" "}
                          <a href="log_in.html" className="login">
                            LOGIN page
                          </a>
                        </p>
                      </div>
            </div>
          </form>
        </div>
        {/* <div class="modal-footer"> */}
      </div>
    </div>
  </div>
</>

  );
}

export default Forgotpass1;
