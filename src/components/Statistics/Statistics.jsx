//import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  const color = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + color() + ',' + color() + ',' + color() + ')';
}
const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li className={styles.item} key={stat.id} style={{ backgroundColor: getRandomColor() }}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
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
