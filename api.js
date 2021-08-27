const student = {
    name: 'Hasan Ali',
    id : 20,
    address : 'Thakurgaon',
}
const stringified = JSON.stringify(student);
const convert = JSON.parse(stringified);
console.log(stringified)
console.log(convert);
