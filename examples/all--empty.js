// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of All the result of empty is true. empty is available on both
//the Constructor and the Instance for convenience.

// All.empty :: () -> All

import log from "./log";
import All from 'crocks/All'

All.empty() //=> All true

All(true).concat(All.empty())   //=> All true
All(false).concat(All.empty())  //=> All false