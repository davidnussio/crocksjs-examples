// either

// Used to provide a means to map a given Result instance folding it out of its
//container. either expects two functions as its arguments. The first is a
//function that will be used to map an undefined. While the second
//will map the value wrapped in a given undefined and return the result of that
//mapping.

// Result e a ~> ((e -> b), (a -> b)) -> b

import log from "./log";
undefined