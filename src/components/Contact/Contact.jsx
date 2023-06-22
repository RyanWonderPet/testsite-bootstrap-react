import React from "react"
const Contact = () => {
return(



    
<>
<>
{/* Breadcrumb */}
<div className="bg-success">
    <div className="container div-breadcrumb">
        <div className="row">
            <div className="col text-white div-active-page-title">Contact</div>
            <div className="col text-white text-right div-breadcrumb">
                <a className="text-white" href="index.html">
                Home
                </a>{" "}
                / Contact
            </div>
        </div>
    </div>
</div>
{/* Breadcrumb */}
</>
<div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15329.254440719122!2d119.97067284870168!3d16.152769852619773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393dcce6b855bc1%3A0x5e83d788b8e10269!2sPoblacion%2C%20Alaminos%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1683604336340!5m2!1sen!2sph"
        width="100%"
        height={400}
        />
</div>
<div className="container pb-5 pt-5 col-lg-10 col-md-10 w-75">
    <div className="shadow">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card border-0 rounded-0 h-100">
                    <div className="card-body">
                        <h5 className="font-weight-bold">
                            <i className="fa-solid fa-location-dot text-success" />
                            &nbsp;Location:
                        </h5>
                        <p className="ml-4">
                            A108 Adam Street <br /> New York, NY 535022
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card border-0  rounded-0 h-100">
                    <div className="card-body">
                        <h5 className="font-weight-bold">
                            <i className="fa-solid fa-location-dot text-success" />
                            &nbsp;Email:
                        </h5>
                        <p className="ml-4">
                            info@example.com, <br /> contact@exaple.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="card border-0  rounded-0 h-100">
                    <div className="card-body">
                        <h5 className="font-weight-bold">
                            <i className="fa-solid fa-location-dot text-success" />
                            &nbsp;Call:
                        </h5>
                        <p className="ml-4">
                            +1 555-444-444, <br /> +1 333-444-444
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className='m-3'>
    <form className="container pb-5 p-4 mb-5 shadow m-4 m-auto col-lg-10 col-md-10 w-75">
        <div className="form-row">
            <div className="form-group col-md-6 col-sm-6">
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Your Name"
                    />
            </div>
            <div className="form-group col-md-6 col-sm-6">
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Your Email"
                    />
            </div>
        </div>
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Subject"
                />
        </div>
        <div className="form-group">
            <textarea
                className="form-control"
                rows={5}
                id="comment"
                placeholder="Message"
                defaultValue={""}
                />
        </div>
        <div className="d-flex justify-content-center">
            <button
                type="button"
                className="btn btn-outline-success text-white bg-success"
                >
            Send Message
            </button>
        </div>
    </form>
</div>
</>
)
}
export default Contact