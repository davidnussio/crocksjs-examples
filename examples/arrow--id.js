// id

//   id provides the identity for the Arrow in that when it is composed to either
//  the left or right side of a given function, it will essentially result in a
//  morphism that is, for all intents and purposes, the given function. For Arrow,
//  id is the simple identity function that echoes it's given argument
//  (x => x). As a convenience, id is also available on the Arrow instance.

// Arrow.id :: () -> Arrow a

import log from "./log";
import Arrow from 'crocks/Arrow'

// arrId :: Arrow a
const id = Arrow.id()

// arrow :: Arrow a String
const arrow =
  Arrow(x => x.toString())

// left :: Arrow a String
const left =
  id.compose(arrow)

// right :: Arrow a String
const right =
  arrow.compose(id)

right.runWith(12)
//=> '12'

left.runWith(12)
//=> '12'