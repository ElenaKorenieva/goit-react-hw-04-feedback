import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(key => {
        return (
          <Button type="button" onClick={onLeaveFeedback} name={key} key={key}>
            {key[0].toUpperCase() + key.slice(1)}
          </Button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
