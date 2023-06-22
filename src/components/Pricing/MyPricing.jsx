import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";




const MyPricing = () => {
return (
<>
{/* Breadcrumb */}
<div className="bg-success">
    <div className="container div-breadcrumb">
        <div className="row">
            <div className="col text-white div-active-page-title">Pricing</div>
            <div className="col text-white text-right div-breadcrumb">
                <a className="text-white" href="index.html">
                Home
                </a>{" "}
                / Pricing
            </div>
        </div>
    </div>
</div>
{/* Breadcrumb */}
<div className="container div-pricing pt-5 pb-5">
    <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 pricing_card_div text-center">
                <a href="#" className="card-header font-weight-bold card_header">
                Free
                </a>
                <div className="card-body">
                    <h5 className="card-title">
                        <span className="text-success" style={{ fontSize: "2.5em" }}>
                        <sup>$</sup>0
                        </span>
                        <span className="text-muted font-weight-normal"> / month</span>
                    </h5>
                    <p className="card-text">Aida dere</p>
                    <p className="card-text">Nec feugiat nisl</p>
                    <p className="card-text">Nulla at volutpat dola</p>
                    <p className="card-text">Pharetra massa</p>
                    <p className="card-text">Massa ultricies mi</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success font-weight-bold">
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 pricing_card_div text-center">
                <a href="#" className="card-header font-weight-bold card_header">
                Business
                </a>
                <div className="card-body">
                    <h5 className="card-title">
                        <span className="text-success" style={{ fontSize: "2.5em" }}>
                        <sup>$</sup>19
                        </span>
                        <span className="text-muted font-weight-normal"> / month</span>
                    </h5>
                    <p className="card-text">Aida dere</p>
                    <p className="card-text">Nec feugiat nisl</p>
                    <p className="card-text">Nulla at volutpat dola</p>
                    <p className="card-text">Pharetra massa</p>
                    <p className="card-text">Massa ultricies mi</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success font-weight-bold">
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 pricing_card_div text-center">
                <a href="#" className="card-header font-weight-bold card_header">
                Developer
                </a>
                <div className="card-body">
                    <h5 className="card-title">
                        <span className="text-success" style={{ fontSize: "2.5em" }}>
                        <sup>$</sup>29
                        </span>
                        <span className="text-muted font-weight-normal"> / month</span>
                    </h5>
                    <p className="card-text">Aida dere</p>
                    <p className="card-text">Nec feugiat nisl</p>
                    <p className="card-text">Nulla at volutpat dola</p>
                    <p className="card-text">Pharetra massa</p>
                    <p className="card-text">Massa ultricies mi</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success font-weight-bold">
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 pricing_card_div text-center">
                <a href="#" className="card-header font-weight-bold card_header">
                Ultimate
                </a>
                <div className="ribbon_container">
                    <span className="bg-success d-flex justify-content-center align-items-center text-white font-weight-bold ribbon">
                    Advanced
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <span className="text-success" style={{ fontSize: "2.5em" }}>
                        <sup>$</sup>49
                        </span>
                        <span className="text-muted font-weight-normal"> / month</span>
                    </h5>
                    <p className="card-text">Nec feugiat nisl</p>
                    <p className="card-text">Nulla at volutpat dola</p>
                    <p className="card-text">Pharetra massa</p>
                    <p className="card-text">Massa ultricies mi</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success font-weight-bold">
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
}
export default MyPricing;