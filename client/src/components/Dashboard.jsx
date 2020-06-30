
import React, { Component } from 'react'
import styles from './Dashboard.module.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default class Dashboard extends Component {

  componentDidMount() {
    console.log(this.props.players);
  }
  render() {
    return (
      <div className={styles.Dashboard}>
        < hr />
        <h1>Love Letter</h1>
        <hr />
        <p>Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter into Princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!</p>
        <Button variant="primary">Enter Room</Button>
        <Button variant="primary" style={{ textDecoration: "none" }}><Link to="/room" style={{ textDecoration: "none" }}>Join Game</Link></Button>
        <div></div>
        <h2 className={styles.Players}>Players</h2>
        1. {this.props.players}<br />
        2. <br />
        3. <br />
        4. <br />
      </div >
    )
  }
}