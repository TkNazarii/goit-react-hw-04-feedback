import React, {useState} from "react";

import TitleFeedback from './_01-title';
import FeedbackOptions from './_02-button';
import Statistics from './_03-statistics';
import Notification from './_04-notification';

import css from './app.module.scss';

const App = () => {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const addValueGood = () => {
		setGood(prevValue => prevValue + 1);
	  };

	const addValueNeutral = () => {
		setNeutral(prevValue => prevValue + 1);
	  };

	  const addValueBad = () => {
		setBad(prevValue => prevValue + 1);
	  };

	  const countTotalFeedback = () => {
		const sum = good + neutral + bad;
		return sum;
	  };

	  const countPositiveFeedbackPercentage = () => {
		const total = countTotalFeedback();
		const percentage = Math.round((100 / total) * good);
		return percentage;
	  };
	

	return (
		<div className={css['feedback']}>
			<TitleFeedback />
      		  <div className={css['feedback__button_list']}>
        	  	<FeedbackOptions addValue={addValueGood} BtnName="good" />
        	  	<FeedbackOptions addValue={addValueNeutral} BtnName="neutral" />
         		<FeedbackOptions addValue={addValueBad} BtnName="bad" />
      		  </div>

			{good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
		</div>
	)
}

export default App





