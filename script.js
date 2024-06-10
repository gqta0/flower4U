onload = () => {
    document.body.classList.remove("container");


    messageContent = document.getElementById("message");


    messages = [
      "Hèm, hèm",
      "Dear my cờ rớt sờ",
      "Ở đây chỉ có những bông hoa xinh xinh",
      "Mà tôi dành tặng cho bé",
      "Chúc em thi tốt",
      "Và luôn tràn ngập niềm vui",
      "Cũng như hãy luôn luôn xinh đẹp",
      "Như những bông hoa này nhe",
      "❤️",
      ""

    ]
    
    let index = 0;

    setInterval(() => {
      message = messages[index];

      if (message) {
        displayText = `< ${message} >`;
      }else {
        displayText = message;
      }
      

      messageContent.innerText = displayText;

      if (index < messages.length-1) {
        index ++;
      }
      console.log(index)


    }, 2000)


  };