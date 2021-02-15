import React from "react";
//import PropTypes from "prop-types";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "./Profile/user.json";
import statisticalData from "./Statistics/statistical-data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        url={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={statisticalData} />
     <Statistics stats={statisticalData} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
