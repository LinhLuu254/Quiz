document.querySelector("#which_anwser1").addEventListener("click", (e) => {
  let selectedAnwser = document.querySelector('input[name="anwser1"]:checked');
 

  if (selectedAnwser.id === "b"){

    let container = document.getElementById('correct_anwser1');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Bravo!";
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = `<ul>Tips:<li>Select Routes to check all available route options</li>
                                  <li>Find the best driving times</li>
                                  <li>Share your ETA</li>
                                  <li>Add a stop to plan out longer trips with breaks</li>
                                  </ul>`;
    
    //Style
    content.style.fontSize = "20px";
    content.style.fontWeight = "0";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    

    document.getElementById("correct_anwser1").appendChild(message);
    document.getElementById("correct_anwser1").appendChild(content);
  }
  
  else{
  
    let container = document.getElementById('correct_anwser1');
    container.replaceChildren();

    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser1").appendChild(error);
  }
});


document.querySelector("#which_anwser2").addEventListener("click", (e) => {
  let selectedAnwser2 = document.querySelector('input[name="anwser2"]:checked');

  if (selectedAnwser2.id === "c2"){

    let container = document.getElementById('correct_anwser2');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Congratulation!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "Bitcoin is the first and most widely recognized cryptocurrency. It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography, and a mechanism to achieve global consensus on the state of a periodically updated public transaction ledger called a 'blockchain.";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";

    document.getElementById("correct_anwser2").appendChild(message);
    document.getElementById("correct_anwser2").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser2');
    container.replaceChildren();

    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser2").appendChild(error);
  }
});

document.querySelector("#which_anwser3").addEventListener("click", (e) => {
  let selectedAnwser3 = document.querySelector('input[name="anwser3"]:checked');


  if (selectedAnwser3.id === "c3"){

    let container = document.getElementById('correct_anwser3');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Perfecto!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "Technology is everywhere, so if you’re highly technologically literate, you become more comfortable using technology in many situations and get the best from it";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser3").appendChild(message);
    document.getElementById("correct_anwser3").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser3');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser3").appendChild(error);
  }

});

document.querySelector("#which_anwser4a").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser4a"]:checked');

  if (selectedAnwser4a.id === "c4a"){

    let container = document.getElementById('correct_anwser4a');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Correct!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "Avoid using personal information (your nickname or birthday), common words (“password” or “letmein”), or sequences (“1234” or “abcd”) that are easy to guess.";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
  
    document.getElementById("correct_anwser4a").appendChild(message);
    document.getElementById("correct_anwser4a").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser4a');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser4a").appendChild(error);
  }
});
document.querySelector("#which_anwser4").addEventListener("click", (e) => {
  let selectedAnwser4 = document.querySelector('input[name="anwser4"]:checked');

  if (selectedAnwser4.id === "c4"){

    let container = document.getElementById('correct_anwser4');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Perfecto!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "The best way to create a secure password is to start with a simple password and turn it into a complex one.";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
  
    document.getElementById("correct_anwser4").appendChild(message);
    document.getElementById("correct_anwser4").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser4');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser4").appendChild(error);
  }
});

document.querySelector("#which_anwser5").addEventListener("click", (e) => {
  let selectedAnwser5 = document.querySelector('input[name="anwser5"]:checked');

  if (selectedAnwser5.id === "d5"){

    let container = document.getElementById('correct_anwser5');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Good job!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "CarPlay works with select third-party apps that you download to your iPhone. Compatible apps—including audio, navigation, messaging, and voice-calling apps, and apps made by your vehicle manufacturer—show up automatically on CarPlay Home and can be controlled with Siri.";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser5").appendChild(message);
    document.getElementById("correct_anwser5").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser5');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser5").appendChild(error);
  }
  
});

document.querySelector("#which_anwser6").addEventListener("click", (e) => {
  let selectedAnwser6 = document.querySelector('input[name="anwser6"]:checked');

  if (selectedAnwser6.id === "d6"){

    let container = document.getElementById('correct_anwser6');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Correct!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser6").appendChild(message);
    document.getElementById("correct_anwser6").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser6');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser6").appendChild(error);
  }
 
});

document.querySelector("#which_anwser7").addEventListener("click", (e) => {
  let selectedAnwser7 = document.querySelector('input[name="anwser7"]:checked');

  
  if (selectedAnwser7.id === "a7"){

    let container = document.getElementById('correct_anwser7');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Correct!"
    message.style.color = "#228B22"
    
    document.getElementById("correct_anwser7").appendChild(message);
  }
  
  else{
    let container = document.getElementById('correct_anwser7');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser7").appendChild(error);
  }
 
});

document.querySelector("#which_anwser8").addEventListener("click", (e) => {
  let selectedAnwser8 = document.querySelector('input[name="anwser8"]:checked');

  if (selectedAnwser8.id === "b8"){

    let container = document.getElementById('correct_anwser8');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Bravo!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "Wireless printers can be Wi-Fi or Bluetooth.";
     
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
  
    document.getElementById("correct_anwser8").appendChild(message);
    document.getElementById("correct_anwser8").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser8');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser8").appendChild(error);
  }
 
});

document.querySelector("#which_anwser9").addEventListener("click", (e) => {
  let selectedAnwser9 = document.querySelector('input[name="anwser9"]:checked');
  if (selectedAnwser9.id === "d9"){

    let container = document.getElementById('correct_anwser9');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Bravo!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    
    content.innerHTML = "Hagtag(#) symbol—is used to index keywords or topics on Twitter. This function was created on Twitter, and allows people to easily follow topics they are interested in.";
    
     //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser9").appendChild(message);
    document.getElementById("correct_anwser9").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser9');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser9").appendChild(error);
  }
 
});

document.querySelector("#which_anwser10").addEventListener("click", (e) => {
  let selectedAnwser10 = document.querySelector('input[name="anwser10"]:checked');

  if (selectedAnwser10.id === "c10"){

    let container = document.getElementById('correct_anwser10');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Correct!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "1 out of 25 branded emails is a phishing email.";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser10").appendChild(message);
    document.getElementById("correct_anwser10").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser10');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser10").appendChild(error);
  }

});

document.querySelector("#which_anwser11").addEventListener("click", (e) => {
  let selectedAnwser11 = document.querySelector('input[name="anwser11"]:checked');

  if (selectedAnwser11.id === "d11"){

    let container = document.getElementById('correct_anwser11');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "You get it right!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "According to an IBM statistic, the average data breach caused due to a phishing attack is estimated to be $3.8 million.";
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";
    
    document.getElementById("correct_anwser11").appendChild(message);
    document.getElementById("correct_anwser11").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser11');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser11").appendChild(error);
  }

});

document.querySelector("#which_anwser12").addEventListener("click", (e) => {
  let selectedAnwser12 = document.querySelector('input[name="anwser12"]:checked');

  if (selectedAnwser12.id === "d12"){

    let container = document.getElementById('correct_anwser12');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "Congratulation!"
    message.style.color = "#228B22"

    let content = document.createElement("p");
    content.innerHTML = "A smart speaker has microphones built-in so that it can listen for an activation word, take your voice request and then perform the right action, which can range from giving you a voice reply (such as the current weather forecast) or controlling a smart device (such as turning on a light)";
    
    //Style
    content.style.fontSize = "20px";
    content.style.backgroundColor ="#00FFFF";
    content.style.border ="solid 2px black";
    content.style.padding ="15px";

    
    document.getElementById("correct_anwser12").appendChild(message);
    document.getElementById("correct_anwser12").appendChild(content);
  }
  
  else{
    let container = document.getElementById('correct_anwser12');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser12").appendChild(error);
  }

});