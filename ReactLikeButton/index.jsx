import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 100,
            clicked: false
        }
    }
    render() {
        const click = () => {
            if (!this.state.clicked) {
                this.setState({
                    counter: this.state.counter+1,
                    clicked: true
                    });
            } else {
                    this.setState({
                    counter: this.state.counter-1,
                    clicked: false
                    });
            }
        }
        return (
            <>
                <div>
                    <button onClick={click} className={`like-button ${this.state.clicked ? 'liked' : ''}`}>
                    Like | <span className='likes-counter'>{this.state.counter}</span></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
