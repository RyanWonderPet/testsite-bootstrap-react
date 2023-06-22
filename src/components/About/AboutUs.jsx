import React from "react";



const AboutUs = () => {
return (
<>
<div className="container pt-5">
    <h5 className="text-center font-weight-bold">OUR SKILLS</h5>
    <hr className=" mb-4 border-success hr-indicator" />
    <div className="col-lg-12">
        <p className="text-center">
            <small>
            Magnam dolores commodi sucipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
            sit in iste officiis commodi qidem hic quas.
            </small>
        </p>
    </div>
</div>
{/* Progress bar */}
<div className="container p-0 d-sm-flex">
    <div className="container pb-5 pl-0">
        <div className="pt-0">
            <div className="d-flex">
                <span className="mr-auto">HTML</span>
                <span>100%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
        <div className="pt-3">
            <div className="d-flex">
                <span className="mr-auto">CSS</span>
                <span>90%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
        <div className="pt-3">
            <div className="d-flex">
                <span className="mr-auto">JAVASCRIPT</span>
                <span>75%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
    </div>
    <div className="container pl-1">
        <div className="pt-0">
            <div className="d-flex">
                <span className="mr-auto">PHP</span>
                <span>80%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
        <div className="pt-3">
            <div className="d-flex">
                <span className="mr-auto">WORDPRESS/CMS</span>
                <span>90%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
        <div className="pt-3">
            <div className="d-flex">
                <span className="mr-auto">PHOTOSHOP</span>
                <span>55%</span>
            </div>
            <div className="progress rounded-0">
                <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "55%" }}
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
                />
            </div>
        </div>
    </div>
</div>
</>
);
}
export default AboutUs;