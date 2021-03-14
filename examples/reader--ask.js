// ask

// A construction helper that returns a Reader with the environment on the right
//portion of the Reader. ask can take a function, that can be used to map the
//environment to a different type or value.

// Reader.ask :: () -> Reader e e
Reader.ask :: (e -> b) -> Reader e b

import log from "./log";
import Reader from 'crocks/Reader'

const { ask } = Reader

// add :: Number -> Number -> Number
const add =
  x => y => x + y

// Typical constructor
Reader(add(10))
  .runWith(56)
//=> 66

// Using `ask` with no function
// (identity on environment)
ask()
  .runWith(56)
//=> 56

// Using `ask` with a function
// (map environment before deposit)
ask(add(10))
  .runWith(56)
//=> 66