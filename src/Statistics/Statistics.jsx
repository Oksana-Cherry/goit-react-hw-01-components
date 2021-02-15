import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats  }) => (
    
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    
  <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    {/*<li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>*/}
  </ul>
</section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
/*        <ul>
                {colors.map((color) => (
                    <li key={color}>{color}</li>//key может быть index
                ))}
            </ul>*/ 
export default Statistics;