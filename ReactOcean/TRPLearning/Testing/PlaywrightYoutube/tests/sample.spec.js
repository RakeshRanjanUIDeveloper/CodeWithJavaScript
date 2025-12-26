const {test, expect}=require('@playwright/test')

test('my first test', async function({page}) {
    expect(20).toBe(20);
})  

test.skip('my second test', async function({page}) {
    expect(200).toBe(201);
})

test('my third test', async function({page}) {
    expect(2.0).toBe(2.0);
})
test('my fourth test', async function({page}) {
    expect("Rakesh Ranjan").toContain("Rakesh");
})
test('my fifth test', async function({page}) {
    expect(true).toBeTruthy();
})