//import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({name, tag,  location, url,  stats}) => {
     return(
      <div className={styles.profile}>
       <div className={styles.description}>
    <img
      src={url}
      alt={name}
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

        <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
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