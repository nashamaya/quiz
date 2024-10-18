import { useState } from "react";

  function CounsellingApp() {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Initial state for each question (set to an empty string)
    const [answers, setAnswers] = useState({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
    });

    // Handle the changes for each question
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAnswers({ ...answers, [name]: value });
    };

    // Calculate the score based on the selected answers
    const handleSubmit = (e) => {
      e.preventDefault();

      const totalScore =
        parseInt(answers.q1) +
        parseInt(answers.q2) +
        parseInt(answers.q3) +
        parseInt(answers.q4) +
        parseInt(answers.q5) +
        parseInt(answers.q6) +
        parseInt(answers.q7) +
        parseInt(answers.q8);

      setScore(totalScore);
      setSubmitted(true);
    };

    const handleNameSubmit = (e) => {
      e.preventDefault();
      setSubmitted(false); // Reset if they want to retake the quiz
    };

    return (
      <div>
        {!submitted ? (
          <div>
            <h1>Welcome to the Counseling App</h1>

            <form onSubmit={handleNameSubmit}>
              <label htmlFor="name">Enter your name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit">Start Quiz</button>
            </form>

            {name && (
              <form onSubmit={handleSubmit}>
                <h2>Hello, {name}! how are you today?.</h2>

                {/* Question 1 */}
                <div>
                  <label>How are you feeling emotionally right now?</label>
                  <select name="q1" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Anxious</option>
                    <option value="1">Sad</option>
                    <option value="1">Overwhelmed</option>
                    <option value="3">Calm</option>
                    <option value="3">Happy</option>
                  </select>
                </div>

                {/* Question 2 */}
                <div>
                  <label>
                    Have you experienced any stress or challenges today?
                  </label>
                  <select name="q2" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Extreme</option>
                    <option value="1">High</option>
                    <option value="2">Moderate</option>
                    <option value="2">Mild</option>
                    <option value="3">None</option>
                  </select>
                </div>

                {/* Question 3 */}
                <div>
                  <label>
                    How connected do you feel to others around you today?
                  </label>
                  <select name="q3" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Disconnected</option>
                    <option value="2">Neutral</option>
                    <option value="2">Connected</option>
                    <option value="3">Very Connected</option>
                  </select>
                </div>

                {/* Question 4 */}
                <div>
                  <label>
                    Have you had time to reflect on or express gratitude today?
                  </label>
                  <select name="q4" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Not at all</option>
                    <option value="2">Briefly</option>
                    <option value="2">Somewhat</option>
                    <option value="3">Often</option>
                  </select>
                </div>

                {/* Question 5 */}
                <div>
                  <label>How is your energy level at the moment?</label>
                  <select name="q5" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Very low</option>
                    <option value="1">Low</option>
                    <option value="2">Average</option>
                    <option value="3">High</option>
                    <option value="3">Very high</option>
                  </select>
                </div>

                {/* Question 6 */}
                <div>
                  <label>
                    Do you feel at peace or are there unresolved issues weighing
                    on your mind?
                  </label>
                  <select name="q6" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Overwhelmed</option>
                    <option value="1">Very worried</option>
                    <option value="2">Somewhat worried</option>
                    <option value="3">At peace</option>
                  </select>
                </div>

                {/* Question 7 */}
                <div>
                  <label>
                    How would you describe your level of spiritual connection
                    today?
                  </label>
                  <select name="q7" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Disconnected</option>
                    <option value="2">Neutral</option>
                    <option value="2">Connected</option>
                    <option value="3">Deeply Connected</option>
                  </select>
                </div>

                {/* Question 8 */}
                <div>
                  <label>What would help you feel more supported today?</label>
                  <select name="q8" onChange={handleInputChange} required>
                    <option value="">Select an option</option>
                    <option value="1">Encouragement</option>
                    <option value="1">Comfort</option>
                    <option value="2">Inspiration</option>
                    <option value="2">Guidance</option>
                    <option value="3">Prayer</option>
                  </select>
                </div>

                <button type="submit">Submit Answers</button>
              </form>
            )}
          </div>
        ) : (
          <div>
            <h2>Thank you for completing the quiz, {name}!</h2>
            <p>Your total score is: {score}</p>

            {score <= 13 && (
              <p>
                You seem to be feeling a bit low today. We’re here to lift you
                up with encouraging and comforting content.
              </p>
            )}
            {score > 13 && score <= 19 && (
              <p>
                You’re doing okay, but could use some empowerment. Here are some
                tips to boost your day.
              </p>
            )}
            {score > 19 && (
              <p>
                You’re feeling great! Keep up the positive energy and continue
                nurturing your mental and spiritual health.
              </p>
            )}

            <button onClick={() => setSubmitted(false)}>Retake Quiz</button>
          </div>
        )}
      </div>
    );
  }


export default CounsellingApp;
