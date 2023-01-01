interface Ikun1 {
  name: string
  age?: number
  slogan?: string
  readonly text?: number
}

type readonlyIkun = Readonly<Ikun1>

type myReadonly<T> = {readonly [K in keyof T]: T[K]}

type myReadonlyIkun = myReadonly<Ikun1>
