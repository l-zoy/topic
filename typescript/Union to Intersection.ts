/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `UnionToIntersection<U>`
  
  For example
  
  ```ts
  type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```
  
  > View on GitHub: https://tsch.js.org/55
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<
    Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>
  >
]

/* _____________ Your Code Here _____________ */

type UnionToIntersection<U, S> = U extends any ? S : UnionToIntersection<U, S & U>

type A = UnionToIntersection<'foo' | 42 | true>
