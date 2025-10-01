//DOM variables 
const triggerDropD = document.querySelector('#moreLogWays')

const spotterArrow = triggerDropD.querySelector('.dropDownArrow')

const socialMediaCont = document.querySelector('.socialLogin')

//switch statment block feature 
let cardTrigged = false

//trigger log card function
function displayCard(){
  
  triggerDropD.classList.toggle('disablesLine');
  
  if(!cardTrigged){
    
    //remove any opposite animation,always remove the opposite one when you embed another one 
    triggerDropD.classList.remove('fontGrownReverse');
    spotterArrow.classList.remove('spinArrowReverse'); 
    
    //add main animation 
    socialMediaCont.classList.add('fadeInDown');
    
    //prevent clicks whe  the animation is ongoing 
    triggerDropD.classList.add('noTouch');
    socialMediaCont.classList.add('noTouch');
    
    //it can make the browser be tricked and fire again the animation at the same generation of DOM...
    
    //void expression make the value returned by the statment be avoided,the value don't still longer the code,only its effect 
    void triggerDropD.offsetWidth;
    void spotterArrow.offsetWidth;
    
    //side elements animation 
    triggerDropD.classList.add('fontGrown');
    spotterArrow.classList.add('spinArrow');
    
    //make it visible 
    socialMediaCont.classList.toggle('hide'); 
    
    //FadeIn animation done 
    socialMediaCont.addEventListener('animationend', () => {
      
      //turning touchable again 
      triggerDropD.classList.remove('noTouch');
      socialMediaCont.classList.remove('noTouch'); 
      
      socialMediaCont.classList.remove('fadeInDown');
      
      //this ensures the animation runs only a time and,in sequence,be removed,meaning that the listeners's stacking will be avoided also the fluid animation reuse be ensured 
    }, {once: true}); 
    
    //changes flag data 
    cardTrigged = true; 
    
  }else{
    
    socialMediaCont.classList.remove('fadeInDown');
    
    triggerDropD.classList.remove('fontGrown');
    spotterArrow.classList.remove('spinArrow'); 
    
    socialMediaCont.classList.add('noTouch');
    triggerDropD.classList.add('noTouch'); 
    
    //general animation 
    socialMediaCont.classList.add('fadeInDownReverse');
    
    void triggerDropD.offsetWidth;
    void spotterArrow.offsetWidth;
    
    triggerDropD.classList.add('fontGrownReverse');
    spotterArrow.classList.add('spinArrowReverse');
    
    //fadeOut animation done 
    socialMediaCont.addEventListener('animationend', () => {
      
      triggerDropD.classList.remove('fontGrown');
      spotterArrow.classList.remove('spinArrow');
      
      //make buttons appears 
      socialMediaCont.classList.toggle('hide');
      
      socialMediaCont.classList.remove('fadeInDownReverse');
      
      triggerDropD.classList.remove('noTouch'); 
      socialMediaCont.classList.remove('noTouch');
      
    }, {once: true}); 
    
    cardTrigged = false;
    
  }
  
}; 

triggerDropD.addEventListener('click', (ee) => {
  
  ee.stopImmediatePropagation(); 
  
  displayCard();
  
});

//vanishes the dropdown's underline if the class has the disablesLine class,by a click out the card 
function removeUnderLine(){
  
  if(cardTrigged){
    
    displayCard();
    
  }; 
  
};

document.addEventListener('click', (ee) => {
  
  //check if the click didn't occurs on the further log ways elements 
  
  //make it also checks if some element inside the conteiner was clicked 
  if(socialMediaCont.contains(ee.target)){
    
    return; 
    
  }else{
    
    if(socialMediaCont.classList.contains('fadeInDown')){
      
      return; 
      
    }
    
    removeUnderLine(); 
    
  };
  
}); 

