function calculatetotalcartvalue(...values){
    let sum = 0;
    for (let price of values) sum += price;
    console.log(`The total cart value is ${sum}`);
}
calculatetotalcartvalue(125,20,30)