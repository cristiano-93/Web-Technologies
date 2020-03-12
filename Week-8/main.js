var tweetInput;
var tweetLimit = 10;
var tweets = [];


function handleKeyDown(e) {


    var tweetOutput = "";
    if(e.code == "Enter") {
        

        //only tweet if text is within length
        if(tweetInput.value.length <= tweetLimit) {
            tweets.push(tweetInput.value);
            tweetInput.value = ""; 
            //debugger; 
            for (var i = 0; i < tweets.length ; i++ ) {
                tweetOutput += "<p>"+tweets[i]+ "</p>";
            }
            document.getElementById('tweetOutput').innerHTML = tweetOutput;
        }

        
        
    }
    //console.log(e.code)
}
function main() {   
    tweetInput = document.getElementById('tweetInput');
    tweetInput.addEventListener('input', handlechange);
    document.addEventListener('keydown', handleKeyDown);
}

function handlechange(e) {
    var tweetLength = tweetInput.value.length;
    var letterCount = document.getElementById('letter-count');
    var text = document.getElementById('text');

    if(tweetLength >= tweetLimit) {
        console.info('got it')
        letterCount.style.backgroundColor = 'red'
    }
    else {
        letterCount.style.backgroundColor = 'pink'
    }
    
        letterCount.innerHTML = tweetLength;
}


