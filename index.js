const btnEl = document.querySelector("#btn");
const emojiNameEl = document.querySelector("#emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("http://emoji-api.com/emojis?access_key=12ed0be79c88a3c09a48807835f785cf25ed1a9a");
    data = await response.json();
    
    for(let i=0; i<1500; i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    }
}
getEmoji();


btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})