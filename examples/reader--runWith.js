// runWith

// As Reader is a lazy datatype that requires a shared environment to run, it's
//instance provides a runWith method that takes in an environment and returns
//the result of the computation.

// Reader e a ~> e -> a

import log from "./log";
import Reader from 'crocks/Reader'
import Pair from 'crocks/Pair'

import fst from 'crocks/Pair/fst'
import liftA2 from 'crocks/helpers/liftA2'
import snd from 'crocks/Pair/snd'

const { ask } = Reader

// data :: Pair Number Number
const data =
  Pair(20, 45)

// getCorrect :: Reader (Pair Number Number) Number
const getCorrect =
  ask(fst)

// getTotal :: Reader (Pair Number Number) Number
const getTotal =
  ask(snd)

// divide :: Number -> Number -> Number
const divide =
  x => y => x / y

// formatPercent :: Number -> String
const formatPercent =
  x => `${Math.floor(x * 1000) / 10}%`

// calcPercent :: Reader (Pair Number Number) String
const calcPercent =
  liftA2(divide, getCorrect, getTotal)
    .map(formatPercent)

calcPercent
  .runWith(data)
//=. '44.4%'