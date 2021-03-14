// option

// Used as the primary way to "fold" a value out of a Maybe, option expects a
//default value. The default value provided will be returned when option is
//invoked on a Nothing instance. When invoked on a Just, the underlying value
//is returned, discarding the provided default value. option is typically ran
//at the "edge" of a flow, to provide default values for complicated
//representations of disjunction.

// Maybe a ~> a -> a

import log from "./log";
undefined