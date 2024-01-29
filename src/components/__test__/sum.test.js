import { sum } from "../sum";

test('Sum function test', () => { 
    const result=sum(5,6);

    //assertion
    expect(result).toBe(11);
 })