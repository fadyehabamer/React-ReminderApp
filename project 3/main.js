let text = document.getElementById("input");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let emoji = text.value
    let arr = [...emoji]

    let finalArr = arr.filter(function (el){
        return el == '';
    })
    console.log(finalArr)




    const emojiRegex = /\p{Emoji}/u;

    if (emojiRegex.test(emoji)) {
        let html = document.createElement("div")
        html.innerHTML = `<p> ${finalArr} </p> `
        document.body.append(html)
    } else {
        Swal.fire({
            icon: 'error',

            text: 'Emojis only allowed',
        })
    }; // true

})


arr2 = [1, '', 3, 4, 5, , 6]
// for (let i = 0; i < arr2.length; i++) {
// console.log(arr[i])
// if (arr2[i] === '' || arr2[i]=== null || arr2[i]===) {
//     arr2.splice(i, 1)
// }
// console.log(arr)
// }
var filtered = arr2.filter(function (el) {
    return el != '';
});
console.log(filtered)