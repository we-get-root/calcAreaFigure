// не понял момент с произвольной фигурой. 
// как я понимаю нужно в коду условно проверять количество аргументов, и строить ментальную модель фигуры и подставлять формулу для вычисления этой фигуры?
// если я верно понял, то в этом нет особой проблемы, но пришлось бы писать много условных блоков, и каким то образом вычислять формулу по которой обрабатывать фигуру
// но такой подход, как по мне и сложен в тестировании и много косяков можно поймать 
// я предпочитаю метод разделения ответственности, да много функций, но зато каждая чище и понятнее и легче тестировать
const calcFigureArea = {
  calcAreaCircleFromRadius(radius) {
    return Math.PI * Math.pow(radius, 2)
  },
  calcAreaTriangle(a, b, c) {
    const p = (a + b + c) / 2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
  },
}

// jest tests
test('calculator area circle from radius', () => {
  expect(calcFigureArea.calcAreaCircleFromRadius(33).toBe(3421.194399759285))
})
test('calculator area triangle', () => {
  expect(calcFigureArea.calcAreaTriangle(15, 13, 17).toBe(93.89988019161686))
})

console.log(calcFigureArea.calcAreaCircleFromRadius(33))
console.log(calcFigureArea.calcAreaTriangle(15, 13, 17))