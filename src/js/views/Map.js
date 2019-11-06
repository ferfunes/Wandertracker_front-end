import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import { SimpleMap } from "../component/SimpleMap";
import StampPic from "../../img/stamp.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const Map = () => (
	<div className="wrapper ">
		<Navbar2 />
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Map</h1>
				</div>
			</div>

			<SimpleMap />
		</div>
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<p className="text-center py-2 px-3">
					<Link to="">
						<img src={AddIcon} className="createTrip m-2" title="Save New Stamp" />
					</Link>
				</p>
			</div>
		</div>
	</div>
);
