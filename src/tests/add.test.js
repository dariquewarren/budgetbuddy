const add=(a,b)=>{
    return a+b
}
const generateGreeting =(name = 'Anon')=> `Hello ${name}!`
 

test('should be a name from the name property', ()=>{
const realName = generateGreeting( 'Darique' )

expect(realName).toBe(`Hello Darique!`)
 })

test('should add 2 numbers', ()=>{
    const result = add(3,4)

    expect(result).toBe(7)
})

test('should be a name when no name provided', ()=>{
    const realName = generateGreeting()
    
    expect(realName).toBe(`Hello Anon!`)
     })