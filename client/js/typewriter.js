 // Init On DOM Load
 document.addEventListener('DOMContentLoaded', init);
 // Init App
 function init(){
     const txtElement = document.querySelector('.typeWriter');
     const words = JSON.parse(txtElement.getAttribute('data-words'));
     const wait = txtElement.getAttribute('data-wait');
 // Init TyperWritering
     new TyperWriter(txtElement, words, wait);
 }

/// using ES6 classes to do it again 
 class TyperWriter{
     constructor(txtElement, words, wait = 1000){
         this.txtElement = txtElement;
         this.words = words;
         this.txt = '';
         this.wordIndex = 0;
         this.wait = parseInt(wait, 10);
         this.type();
         this.isDeleting = false;
     }
     type(){
         // console.log("hello");
     // current index of words
     const current = this.wordIndex % this.words.length;
     // console.log(current);
 // get full text of current word
     const fullTxt = this.words[current];
     // console.log(fullTxt);
 // check if its in the deleting state
     if(this.isDeleting){
     // Remove a char
     this.txt = fullTxt.substring(0, this.txt.length - 1);
     }else{
     // Add a char
     this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
     // insert txt into Elemnent
     this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;

     // initial TypeSpeed
     let typeSpeed = 100;
     if(this.isDeleting){
         typeSpeed /= 2;
     }
     // Check if the word is complate
     if(!this.isDeleting && this.txt === fullTxt){
     // pause at the end
         typeSpeed = this.wait;
     // set is deleting to true
         this.isDeleting = true;
     }else if(this.isDeleting && this.txt === ''){
         this.isDeleting = false;
         // move to  the next word
         this.wordIndex++;
         // pause before typing next word
         typeSpeed = 300;
     }

         setTimeout(()=> this.type(), typeSpeed);
     }
 }