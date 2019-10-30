import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const AddTrip = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">New Trip</h1>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col d-flex justify-content-center mb-5">
					<input type="text" className="textfield col-md-6" placeholder="Trip Name" />
					<button className="addButton bg-white px-2 mx-2 col-md-1">Add</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col-md-4">
					<h4 className="pageEntry">Contacts</h4>
				</div>
				<div className="col-md-8 d-flex justify-content-end">
					<input type="text" className="textfield col-md-6" placeholder="New Contact" />
					<button className="addButton bg-white px-2 mx-2">Add</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col-md-4">
					<h4 className="pageEntry">Places</h4>
				</div>
				<div className="col-md-8 d-flex justify-content-end">
					<input type="text" className="textfield col-md-6" placeholder="New Place of Interest" />
					<button className="addButton bg-white px-2 mx-2">Add</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col-md-4">
					<h4 className="pageEntry">Itinerary</h4>
				</div>
				<div className="col-md-8 d-flex justify-content-end">
					<input type="text" className="textfield col-md-6" placeholder="New Activity" />
					<button className="addButton bg-white px-2 mx-2">Add</button>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="xlButton text-center py-2 px-3">Save</h1>
				</div>
			</div>
		</div>
	</div>
);
