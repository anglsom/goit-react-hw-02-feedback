import PropTypes from 'prop-types';

export default function NotificationMessage({ message }) {
  return <p>There is no feedback</p>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};