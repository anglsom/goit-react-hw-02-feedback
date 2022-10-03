import React, { Component } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './NotificationMessage';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;

  return good + neutral + bad;
 };
  
countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const allFeedbacks = this.countTotalFeedback();
  let result = 0;
  if (allFeedbacks > 0) {
    result = Math.round((good * 100) / allFeedbacks);
  }
  return result;
  };

optionFeedbackClick = event => {
  const option = event.target.name;
  this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

render() {
  const { good, neutral, bad } = this.state;
  const options = Object.keys(this.state);
  const feedbackSum = this.countTotalFeedback();
  const positiveFeedbacks = this.countPositiveFeedbackPercentage();
 
return (
<>
<Section title="Please leave feedback">
<Feedback
  options={options}
  onLeaveFeedback={this.optionFeedbackClick}
></Feedback>
</Section>
<Section title="Statistics">
  {feedbackSum === 0 ? (
<Notification message="There is no feedback" />
  ) : (
<Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  total={feedbackSum}
  positivePercentage={positiveFeedbacks}
></Statistics>
  )}
</Section>
</>
);
}
}

export  default App;
