import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import StampPic from "../../img/stamp.jpg";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const TravelDoc = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Documents</h1>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">
						<Link to="/AddStamp">
							<img
								src="https://img.icons8.com/dusk/96/000000/passport.png"
								className="createTrip m-2"
								title="Save New Document"
							/>
						</Link>
					</p>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex ">
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
				</div>
				<div>
					<Link to="/TripDetails">
						<button className="smallButton bg-white px-2 mx-2">Delete</button>
					</Link>
					<button className="smallButton bg-white px-2 mx-2">Share</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex">
					<img className="logo-navbar navbar-brand mb-0 h1 " src={StampPic} />
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
				</div>
				<div>
					<button className="smallButton bg-white px-2 mx-2">Delete</button>
					<button className="smallButton bg-white px-2 mx-2">Share</button>
				</div>
			</div>
		</div>
	</div>
);
