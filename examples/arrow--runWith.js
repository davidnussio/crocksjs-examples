// runWith

//   Arrows are lazy to make combining and extending them easy. Once you have your
//  final computation built out and you are ready to execute it, all you have to
//  do is call runWith on it, passing in the argument you what to run it with.

// Arrow a b ~> a -> b

import log from "./log";
import Arrow from 'crocks/Arrow'
import Sum from 'crocks/Sum'

import branch from 'croc  ks/Pair/branch'
import merge from 'crocks/pointfree/merge'
import mreduce from 'crocks/helpers/mreduce'

// data :: [ Number ]
const data =
  [ 35, 60, 22, 100 ]

// arrLength :: Arrow [ a ] Number
const arrLength =
  Arrow(x => x.length)

arrLength
  .runWith(data)
//=> 4

// arrSum :: Arrow [ Number ] Number
const arrSum =
  Arrow(mreduce(Sum))

arrSum
  .runWith(data)
//=> 217

// arrAvgList :: Arrow [ Number ] Number
const arrAvgList =
  arrSum.first()
    .compose(arrLength.second())
    .promap(branch, merge((x, y) => x / y))

arrAvgList
  .runWith(data)
//=> 54.25