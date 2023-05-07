import PropTypes from 'prop-types';

import css from './notifiction.module.scss';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css['feedback__notification']}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
  };

export default Notification;
