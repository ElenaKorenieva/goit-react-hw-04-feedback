import { useState } from 'react';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Message } from '../Message/Message';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

export const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = event => {
    const buttonEl = event.target.name;
    setFeedback(prevState => {
      return {
        ...prevState,
        [buttonEl]: prevState[buttonEl] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  return (
    <>
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countPositiveFeedbackPercentage() > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              percentagePositive={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Message text="There is no feedback" />
          )}
        </Section>
      </Container>
    </>
  );
};
