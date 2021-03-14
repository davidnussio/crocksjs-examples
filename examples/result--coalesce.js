// coalesce

// There will come a time in your flow that you will want to ensure you have
//an undefined of a given type. coalesce allows you to map over both
//the undefined and the undefined and return an undefined. coalesce expects
//two functions for it's inputs.

// Result e a ~> ((e -> b), (a -> b))) -> Result c b

import log from "./log";
undefined