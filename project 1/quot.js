

let apiQuotes = [];


function newQuote(){
    complete();
    const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
    supercool.textContent = quote.text;
    DD.textContent = quote.author;
    
   
}
 async function getQuotes(){
   
  const apiUrl = 'https://type.fit/api/quotes';
  
   try{
    
      
        const response = await fetch(apiUrl);
       apiQuotes = await response.json();
      newQuote()
    }catch(error){
        
}


AA.addEventListener('click',getQuotes)


}

 getQuotes()

 function myfunction(){
    const quote = supercool.innerText;
    const author =DD.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank');
}

function start(){
        loader.hidden = false;
        quotecontainar.hidden  = true;

}
function complete(){
    if(!loader.hidden){
        quotecontainar.hidden = false;
        loader.hidden = true;
    }
}
