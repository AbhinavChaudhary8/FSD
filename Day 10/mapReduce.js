const arr = [1,2,3,4,5];

// map
const mapArr = arr.map((ele)=>ele*4);
console.log(mapArr);

// REDUCE
const sum =arr.reduce((acc,ele)=>acc+=ele, 0);
console.log(sum);

// filter
const filterData = arr.filter((ele)=>ele %4===0);
console.log(filterData);

const data=[
    {
        productID: 1,
        productName: "A",
        price: 200,
        color:"red"
    },
    {
        
        productID: 2,
        productName: "B",
        price: 700,
        color:"blue"
    },
    {
        productID: 3,
        productName: "3",
        price: 400,
        color:"black"
    } 
]
const mapData=data.map((ele)=>ele.productName);
console.log(mapData);

const filteredData = data.filter((ele) => ele.price < 600);

console.log(filteredData);