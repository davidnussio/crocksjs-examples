// promap

//   promap can be used to adapt BOTH ends of an Arrow allowing for existing Arrows
//  to be reused in places in a flow where the types do not line up. It combines
//  both undefined and undefined into one operation. Just pass
//  the function for undefined as the first argument and the
//  function undefined as the second.

// Arrow a b ~> ((c -> a), (b -> d)) -> Arrow c d

import log from "./log";
import Arrow from 'crocks/Arrow'

import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import getProp from 'crocks/Maybe/getProp'
import isString from 'crocks/predicates/isString'
import objOf from 'crocks/helpers/objOf'
import option from 'crocks/pointfree/option'
import safe from 'crocks/Maybe/safe'

// upperFirst :: String -> String
const upperFirst = x =>
  x.charAt(0)
    .toUpperCase()
    .concat(x.slice(1).toLowerCase())

// arrTitleize :: Arrow String
const arrTitleize =
  Arrow(x => x.split(' ').map(upperFirst).join(' '))

arrTitleize
  .runWith('tHis is siLLy')
//=> 'This Is Silly'

// stringProp :: String -> Object -> String
const stringProp = key => compose(
  option(''),
  chain(safe(isString)),
  getProp(key)
)

// arrTitleObject :: Arrow Object
const arrTitleObject =
  arrTitleize
    .promap(stringProp('title'), objOf('title'))

arrTitleObject
  .runWith({ title: 'SaY wHaT!?!' })
// { title: 'Say What!?!' }

arrTitleObject
  .runWith({ title: true })
// { title: '' }