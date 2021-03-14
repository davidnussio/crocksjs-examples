// modify

// A construction helper that can be used to lift an endo-function that matches
//the fixed type of the state portion. The lifted function will receive the state
//and returns a new State instance with the result of the function in the state
//portion. Great care should be taken to not use functions that will change the
//type of the state as it may not be expected in other stateful computations and
//can result in hard to track down bugs.

// State.modify :: (s -> s) -> State s ()

import log from "./log";
import State from 'crocks/State'

import mapProps from 'crocks/helpers/mapProps'

const { modify } = State

// add :: Number -> Number -> Number
const add =
  x => y => x + y

// addState :: Number -> State Number ()
const addState = x =>
  modify(add(x))

// addValue :: Number -> State Object ()
const addValue = x =>
  modify(mapProps({ value: add(x) }))

addState(5)
  .execWith(45)
//=> 50

addValue(5)
  .execWith({ value: 45 })
//=> { value: 50 }

addValue(5)
  .execWith({})
//=> {}