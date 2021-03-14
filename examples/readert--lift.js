// lift

// Used to promote an instance of a given Monad into a ReaderT of that Monads
//type. This can be used to lift a pointed instance of the underlying Monad.
//When mixed with composition, lift can be used to promote functions that take
//the form of a -> m b into a function that can be chained with the ReaderT.
//Although, undefined can be used to remove the composition boilerplate
//and promote and a -> m b function.

// ReaderT.lift :: Monad m => m a -> ReaderT e (m a)

import log from "./log";
<!-- eslint-disable no-console -->