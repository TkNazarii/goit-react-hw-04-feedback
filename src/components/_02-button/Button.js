import PropTypes from 'prop-types';
import css from './button.module.scss';

const FeedbackOptions = ({ addValue, BtnName }) => {

  return (
    <button
      type="button"
      className={css['feedback__button']}
      onClick={addValue}
    >
      {BtnName}
    </button>
  );
};

FeedbackOptions.propTypes = {
	addValue: PropTypes.func.isRequired,
	BtnName: PropTypes.string.isRequired,
  };

export default FeedbackOptions;


