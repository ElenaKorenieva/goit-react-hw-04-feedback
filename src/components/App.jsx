import { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Message } from './Message';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const buttonEl = event.target.name;
    this.setState(prevState => {
      return {
        [buttonEl]: prevState[buttonEl] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const percentagePositive = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Container>
          <Section title="Please leave your feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.countPositiveFeedbackPercentage() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentagePositive={percentagePositive}
              />
            ) : (
              <Message text="There is no feedback" />
            )}
          </Section>
        </Container>
      </>
    );
  }
}
