// map

// While the state portion s of State must remain fixed to a type, the
//resultant a can vary in it's type as needed. This allows complex stateful
//computations to be represented with State. The map method provides a means
//to lift a function into the datatype that will be applied to the resultant and
//return a new instance of State with the result of the function as the new
//resultant.

// State s a ~> (a -> b) -> State s b

import log from "./log";
undefined