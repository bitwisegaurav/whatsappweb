setTimeout(() => {
    document.getElementById('lastseen').style.display = "none";
}, 10000);

function getChatsData(data) {
    let content = ``;

    data.forEach(chat => {
        let isRight = chat.side === "left";
        content += `<div class="${isRight ? "leftside" : "rightside"}">
            <div class="${isRight ? "leftmsg" : "rightmsg"}">
                <div class="msg">${chat.msg}</div>
                <div class="msginfo">
                    <div class="time">${chat.time}</div>
                    ${isRight && chat.seen ? `<div class="seen">
                        <span class="material-symbols-outlined">done</span>
                        <span class="material-symbols-outlined">done</span>
                    </div>` : ""}
                </div>
            </div>
        </div>`
    });

    return content;
}