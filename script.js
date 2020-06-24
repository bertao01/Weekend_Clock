function update_clock(){

    //variables
    var clock = document.getElementById('clock')
    var currentTime = new Date()
    
    var hours = currentTime.getHours()
    hours = hours < 10 ? hours = "0"+hours : hours 

    var minutes = currentTime.getMinutes()
    minutes = minutes < 10 ? minutes = "0"+minutes : minutes 
    
    var seconds = currentTime.getSeconds()
    seconds = seconds < 10 ? seconds = "0"+seconds : seconds 

    var image = document.querySelector('img')

    var comment = document.getElementById('time_to')

    //methods

            if(true){
                window.setTimeout(update_clock,1)
            }

            if(hours < 6){
                image.src = 'img/sleep.png'
                comment.innerHTML = "Time to rest"
            } else if (hours < 7){
                image.src = 'img/breakfast.png'
                comment.innerHTML = "Time to have breakfast"
            } else if (hours < 12){
                image.src = 'img/beach.png'
                comment.innerHTML = "Time to go to the beach"
            } else if (hours < 13){
                image.src = 'img/lunch.png'
                comment.innerHTML = "Time to have lunch"
            } else if (hours < 18){
                image.src = 'img/exercises.png'
                comment.innerHTML = "Time to do exercises"
            } else if (hours < 19){
                image.src = 'img/dinner.png'
                comment.innerHTML = "Time to have dinner"
            } else {
                image.src = 'img/party.png'
                comment.innerHTML = "Time to party all night"
            }

            clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
        }

        