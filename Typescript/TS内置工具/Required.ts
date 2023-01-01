// required把类型都变为必选
interface Ikun0 {
  name: string
  age?: number
  slogan?: string
  text?: number
}


type requireIkun = Required<Ikun0>

type myRequire<T> = { [p in keyof T] - ? : T[p]}

type test = myRequire<Ikun0>

