let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<4){
        speak("Good afternoon sir")
    }else{
        speak("Good Evening sir")
    }
}
//window.addEventListener('load',()=>{
  //      wishMe()
//})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
       let currentIndex=event.resultIndex
       let transcript=event.results[currentIndex][0].transcript
       content.innerText=transcript
        takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){

    btn.style.display="flex" 
    voice.style.display="none"   

    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am jarvis,created by Anas Sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon")
        window.open("https://www.amazon.in/","_blank")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart")
        window.open("https://www.flipkart.com/","_blank")
    }
    else if(message.includes("facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/","_blank")
    }
    else if(message.includes("whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp.com/","_blank")

    }
    else if(message.includes("open photos")){
        speak("opening photos..")
        window.open("photos://")
    }
    else if(message.includes("open  system settings")){
        speak("opening settings..")
        window.open("system settings://")
    }
    else if(message.includes("chatgpt")){
        speak("opening chatgpt")
        window.open("chatgpt.com/","_blank")

    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
}

else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
}


    else{
        let finalText="this is what i found on internet reagarding" + message.replace("javis","")|| message.reaplace ("jarvis","")
            speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank")
    }


}
