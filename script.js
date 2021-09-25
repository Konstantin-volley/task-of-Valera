//___________________________________________________________________________________задачи от Валеры
// let arr = [1, 3, 5, 7, 2, 3, 9, -3]

// function sortMin (array) {
//         let min = array[0]
//         for(i = 0; i < array.length; i++){
//                 if(array[i] < min){
//                         min = array[i]
//                 }
                
//         }
//         return min
// }
// console.log(sortMin(arr))



// let arr = [1, 3, 5, 7, 2, 3, 9, -3]

// function sortMax (array) {
//         let max = array[0]
//         for(i = 0; i < array.length; i++){
//                 if(array[i] > max){
//                         max = array[i]
//                 }
               
//         }
//         return max
// }
// console.log(sortMax(arr))


// let arr = [1, 3, 5, 7, 2, 3, 9, -3]
// function sum (array) {
//         let num = 0
//         for(i = 0; i < array.length; i++){
//                 num += array[i]
//         }
//         return num
// }
// console.log(sum(arr))


// let arr = [1, 3, 5, 7, 2, 3, 9, -3]
// function qsort(array) {
//         if(array.length <= 1) {
//                 return array
//         } 
//         let pivotIndex = Math.floor(array.length / 2)
//         let pivot = array[pivotIndex]
//         let less = []
//         let greater = []
//         for(i = 0; i < array.length; i++){
//                 if(i === pivotIndex){
//                         continue
//                 } if (array[i] < pivotIndex) {
//                         less.push(array[i])
//                 } else {
//                         greater.push(array[i])
//                 }
//         }
//         return [...qsort(less), pivot, ...qsort(greater)]
// }
// console.log(qsort(arr))





// let arr = [1, 3, 5, 7, 2, 3, 9, -3]                                  //Валер, сортировку по убыванию допетрил только пузырьковую, она по времени конечно дольше  
// function bubbleSort (array) {                                        //чем быстрая сортировка, но хоть что-то
//         for(let i = 0; i < array.length; i++) {
//                 for(let j = 0; j < array.length; j++) {
//                         if(array[j + 1] > array[j] ) {
//                                 let tmp = array[j]
//                                 array[j] = array[j + 1]
//                                 array[j + 1] = tmp
//                         }
//                 }
                
//         }
//         return array
// }
// console.log(bubbleSort(arr))let add = document.querySelector('.some')






















































































let add = document.querySelector('.some')
add.addEventListener('click', function color(e) {
        add.style.color = 'red'
        add.innerHTML = 'зацени че могу)'
})
