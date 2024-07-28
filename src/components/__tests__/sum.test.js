import { sum } from "../sum"

test("sum function will cal sum of two number", ()=>{
    const res = sum(3,4)

    //Assertion Statement

    expect(res).toBe(7)
})