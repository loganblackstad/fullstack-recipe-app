import React, { Component } from 'react'
import styles from './Card.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


export default class Card extends Component {


  render() {
    return (
      <div>
        <div className="Card_back"></div>
        <Button variant="secondary">Play Card</Button>
        <div>
          <div className="Card">
            <div className={styles.CardInner}>
              <div className={styles.CardBack}>
              </div>
              <div className={styles.CardFront}>
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
