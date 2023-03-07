import PropTypes from 'prop-types';
import { TextEl } from './Message.styled';

export function Message({ text }) {
  return <TextEl>{text}</TextEl>;
}
Message.propTypes = {
  text: PropTypes.string.isRequired,
};
