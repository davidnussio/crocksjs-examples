// equals

// Used to compare the underlying values of (2) All instances for equality by
//value, equals takes any given argument and returns true if the passed argument
//is an All with an underlying value equal to the underlying value of the All the
//method is being called on. If the passed argument is not an All or the underlying
//values are not equal, equals will return false.

// All a ~> b -> Boolean

import log from "./log";
import All from "crocks/All";

All(true).equals(All(true));
//=> true

log("Result:", All(true).equals(All(false)));
//=> false
