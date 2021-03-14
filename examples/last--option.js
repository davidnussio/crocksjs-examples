// option

// Last wraps an underlying undefined which provides the ability to option out
//a value in the case of an undefined instance. Just like undefined on
//a undefined instance, it takes a value as its argument. When run on
//an undefined instance, the provided default will be returned.
//If option is run on a non-empty instance however, the wrapped value will be
//extracted not only from the Last but also from the underlying undefined.

// Last a ~> a -> a

import log from "./log";
undefined