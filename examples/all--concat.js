// concat

// concat is used to combine (2) Semigroups of the same type under an operation
//specified by the Semigroup. In the case of All, it will combine the (2)
//using logical AND (conjunction).

// All ~> All -> All

import log from "./log";
import All from 'crocks/All'

All(true).concat(All(true))   //=> All true
All(true).concat(All(false))  //=> All false
All(false).concat(All(true))  //=> All false
All(false).concat(All(false)) //=> All false