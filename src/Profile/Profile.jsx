import React from "react";
import PropTypes from "prop-types";

 
const Profile = ({name, tag,  location, url,  stats}) => {
     return(
      <div className="profile">
       <div className="description">
    <img
      src={url}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

        <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
      </div>  
    );
};
Profile.defaultProps = {
    tag: "",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },

};
Profile.propTypes = {
  url: PropTypes.string.isRequired, //если не важно...
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  //stats: PropTypes.number.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
//https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg
export default Profile;