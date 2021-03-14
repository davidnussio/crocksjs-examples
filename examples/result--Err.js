// Err

// Used to construct an undefined instance that represents the "false" portion
//of a disjunction. When an instance is an undefined, most Result returning
//methods will just return a new undefined instance with the same containing
//value.

// Result.Err :: e -> Result e a

import log from "./log";
undefined