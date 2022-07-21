import React from "react";
import {Card} from "react-bootstrap";
import {UserContext} from './context';

function AllData() {
    const ctx = React.useContext(UserContext);

    return (
			<Card>
				<div
					onload='allData()'
					class='card text-gray bg-info mb-3'
					style='max-width: 540px; margin-top:10px; padding:20px;'
				>
					<div class='row no-gutters'>
						<div class='col-md-4'>
							<img src='badPig.png' class='card-img' alt='...' />
						</div>
						<div class='col-md-8'>
							<div class='card-body'>
								<h5 class='card-title'>Better Bank User Database</h5>
								<button
									type='button'
									class='btn btn-secondary'
									onclick='allData()'
								>
									{" "}
									Sbow All Data{" "}
								</button>
								<p class='card-text' id='allDataStatus'></p>
								<br />
								<div id='status'></div>
								<p class='card-text'>
									<small class=''>ERROR SPACE </small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Card>
		);
};

export default AllData;