import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false,
        };
    }

    handleClick(buttonText) {
        this.setState({ incorrectAnswer: buttonText !== this.props.quiz_question.answer }, () => {
            !this.state.incorrectAnswer && this.props.showNextQuestionHandler();
        });
    }

    render() {
        return (
            <main>
                {this.state.incorrectAnswer && <p className="error">Sorry, that's not right</p>}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map(
                            (answer_option, index) => <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={answer_option} />
                        )}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion