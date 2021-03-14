// equals

// Used to compare the underlying values of two Const instances for equality by
//value, equals takes any given argument and returns true if the passed
//argument is a Const with an underlying left value equal to the underlying
//value of the Const the method is being called on. If the passed argument is
//not a Const or the underlying values are not equal, equals will
//return false.

// Const c a ~> b -> Boolean

import log from "./log";
import Const from 'crocks/Const'

// NumConst :: Const Number a
const NumConst =
  Const(Number)

// ArrConst :: Const Array a
const ArrConst =
  Const(Array)

NumConst(2)
  .equals(NumConst(5))
//=> false

NumConst(5)
  .equals(NumConst(5))
//=> true

ArrConst([ 'a', 'b' ])
  .equals(ArrConst([ 'c', 'd' ]))
//=> false

ArrConst([ 'c', 'd' ])
  .equals(ArrConst([ 'c', 'd' ]))
//=> true