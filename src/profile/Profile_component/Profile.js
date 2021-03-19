import React from "react";
import PropTypes from "prop-types";

function Profile({ fullname, bio, profession, image }) {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
	return (
		<div>
			<div className="imge">{image} </div>
			<h1 style={mystyle}>{fullname}</h1>
			<h4>{bio}</h4>
			<h4>{profession}</h4>
		</div>
	);
}
Profile.defaultProps = {
	fullname: "Defautl is loading...",
    bio: "Defautl Bio. is loading...",
	profession: "Defautl profession is loading...",
};
Profile.propTypes = {
	fullname: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired,
};

export default Profile;
