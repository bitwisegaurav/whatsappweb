function getUsersData(data) {
    let content = ``;

    data.forEach(user => {
        content += `<div class="block ${user.state}">
            <div class="imgbx">
                <img src="${user.img}" alt="${user.name}'s profile pic}">
            </div>
            <div class="details">
                <div class="listhead">
                    <h4 class="name">${user.name}</h4>
                    <p class="time">${user.time}</p>
                </div>
                <div class="messages_p">
                    <p>${user.msg}</p>
                    ${user.seen ? `<div class="seen">
                    <span class="material-symbols-outlined">done</span>
                    <span class="material-symbols-outlined">done</span>
                </div>` : ""}
                    ${user.msgCount ? `<b>${user.msgCount}</b>` : ""}
                </div>
            </div>
        </div>`
    });

    return content;
}