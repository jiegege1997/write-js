// 把类型都变为可选
interface Ikun {
  name: string
  age: number
  slogan?: string
}

// 把Ikun都变成可选
type IkunOptional = Partial<Ikun>