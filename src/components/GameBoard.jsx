import React, { Component } from 'react'

const logo = '../images/mw-logo.jpg'
const img1 = '../images/realTeal.jpg'
const img2 = '../images/lavender.jpg'

export default class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                [logo, img1],
                [logo, img2]
            ],
        }
    }

    componentDidMount() {
        this.getBoard()
    }

    getBoard() {
        let cardOptions = this.state.cards
        // duplicate images to create card matches
        let board = this.shuffleCards(cardOptions.concat(cardOptions))
        this.setState({cards: board})
    }

    shuffleCards(arr) {
        arr.sort(() => Math.random() - 0.5)
        return arr
    }

    flipCard(clickedCard, i) {
        let updateCards = this.state.cards
        updateCards[i] = [clickedCard[1], clickedCard[0]]
        this.setState({cards: updateCards})
    }

    render() {
        return (
            <div>
                {this.state.cards.map((card, i) => (
                    <button id={'gamecard-'+i} key={i} onClick={() => {
                        this.flipCard(card, i)
                    }}>
                        <img src={card[0]}/>
                    </button>
                ))}
            </div>
        )
    }
}
