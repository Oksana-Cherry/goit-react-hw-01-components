import React from "react";
import PropTypes from 'prop-types';
import styles from "./FriendList.module.css"
//<ul class="friend-list">
 // <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
//</ul>

const FriendList = ({ friends }) => (

  <ul className={styles.friend_list}>
    {friends.map(({id, isOnline, avatar, name}) => (
      <li className={styles.item} key={id}>
        <span className={isOnline? styles.statusOnline:styles.statusOffline}></span>{/*isOnline? green true : red false*/}
         <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
      ))}
  </ul> 
);
 
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendList;
/*или так, документации.
function FriendList(props) {
  const friends = props.friends;
  const FriendListItem = friends.map(({id, isOnline, avatar, name}) =>
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
  return (<ul className="friend-list">{FriendListItem}</ul>
  );
}*/ 