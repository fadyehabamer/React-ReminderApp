let text = document.getElementById("input");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let emoji = text.value
    let arr = [...emoji]

    for (let i =0;i<arr.length;i++){
        // console.log(arr[i])
        if (arr[i] == ''){
            console.log(arr[i])
        }
        // console.log(arr)
    }
   
    


    const emojiRegex = /\p{Emoji}/u;

    if (emojiRegex.test(emoji)) {
        let html = document.createElement("div")
        html.innerHTML = `<p> ${arr} </p> `
        document.body.append(html)
    } else {
        Swal.fire({
            icon: 'error',

            text: 'Emojis only allowed',
        })
    }; // true

})
