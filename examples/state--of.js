// of

// Used to "blindly" lift any JavaScript value into a State, of will take the
//provided value and return back a new State instance with the value in
//the resultant. There are many uses for of, but mostly it is used to set the
//resultant in the same way undefined is used to replace the state. Many
//times of is used at the start of a given stateful computation or in conjunction
//with undefined and undefined to replace the Unit the resultant
//is set to for those construction helpers.

// State.of :: a -> State s a

import log from "./log";
import State from 'crocks/State'

const { get, put } = State

// updatePop :: String -> State String String
const updatePop = x =>
  get().chain(
    old => put(x).chain(
      () => State.of(old)
    )
  )

State.of('hotness')
  .chain(updatePop)
  .runWith('crusty')
//=> Pair('crusty', 'hotness')