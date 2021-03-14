// extend

// Used map the second position of a given Pair instance by taking the
//entire Pair into consideration. extend takes a function the receives
//a Pair as its input and returns a new Pair with the result of that function
//in the second position, while leaving the value in the first position untouched.

// Pair a b ~> (Pair a b -> c) -> Pair a c

import log from "./log";
import Pair from 'crocks/Pair'

import extend from 'crocks/pointfree/extend'
import merge from 'crocks/pointfree/merge'
import objOf from 'crocks/helpers/objOf'

// name :: Pair String String
const name =
  Pair('name', 'Thomas')

// mergeObj :: Pair String a -> Object
const mergeObj =
  merge(objOf)

// makeObj :: Pair String a -> Pair String Object
const makeObj =
  extend(mergeObj)

makeObj(name)
//=> Pair("name", { name: "Thomas" })