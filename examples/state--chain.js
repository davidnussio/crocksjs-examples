// chain

// As a means to combine stateful computations, chain is used to sequence
//state transactions that either read from or write to the state. chain takes
//a unary function that must return a new State instance. chain returns a
//new State instance that will apply the computation when run.

// State s a ~> (a -> State s b) -> State s b

import log from "./log";
import State from 'crocks/State'

const { get, modify } = State

// add :: Number -> State Number ()
const add = x =>
  modify(y => x + y)

// multiply :: Number -> State Number ()
const multiply = x =>
  modify(y => x * y)

// double :: () -> State Number ()
const double = () =>
  get()
    .chain(add)

// square :: () -> State Number ()
const square = () =>
  get()
    .chain(multiply)

add(10)
  .execWith(10)
//=> 20

add(10)
  .chain(double)
  .execWith(10)
//=> 40

add(10)
  .chain(square)
  .execWith(10)
//=> 400

add(10)
  .chain(double)
  .chain(square)
  .execWith(10)
//=> 1600