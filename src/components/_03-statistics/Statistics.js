import PropTypes from 'prop-types';

import css from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['statistics__wrapper']}>
      <h2 className={css['statistics__text']}>Statistics</h2>
      <ul className={css['statistics__list']}>
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {total}</li>
        <li>Positive feedback {positivePercentage} %</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;
