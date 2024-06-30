// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }
  
    // Easing function (you can use a different one if desired)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      const duration = 1000; // Adjust the duration as needed
      smoothScroll(target, duration);
    });
  });
  
  /*On scroll slider 0*/ 

  window.addEventListener("scroll", reveal);

  function reveal(){
    var reveals = document.querySelectorAll(".revelsection2");

    for(i = 0; i <reveals.length; i++){
      var windowheight =  window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop<windowheight - revealpoint){
        reveals[i].classList.add('active');
      }else{
        reveals[i].classList.remove('active');

      }
    }
  }

  /*Making onclick function that show project details*/

let imgsec4 = document.getElementById("clicksection4");
imgsec4.addEventListener("click", showdet);
function showdet(){
  let hsection4 = document.getElementById("headingsec4");
  let perasec4 =  document.getElementById("perasec4");
  let pera2sec4 = document.getElementById("pera2sec4");
  hsection4.textContent = "JARVIS";
  perasec4.textContent = `The Jarvis program you are building using the SAPI5 model and Wikipedia aims to provide functionality for searching and surfing the internet based on voice commands. It utilizes the Speech API (SAPI5) for voice recognition and synthesis, and interacts with Wikipedia to retrieve information.

  The program allows you to give voice commands to interact with it. For example, you can say "Good morning" to initiate a conversation or perform specific actions. The program utilizes speech recognition to convert your spoken command into text, enabling it to understand and respond accordingly.`;
  
  pera2sec4.textContent = `One of the key features of the program is the ability to search for information on the internet. By leveraging the power of Wikipedia, it can retrieve and present relevant information on a wide range of topics. You can ask questions, request definitions, or inquire about specific subjects, and the program will utilize Wikipedia to fetch the relevant information and provide it in a readable format.
  
  Overall, the Jarvis program combines voice recognition, speech synthesis, and internet browsing capabilities to create an interactive experience. It enables you to communicate with your computer using voice commands, search for information on the internet, and receive responses based on the retrieved data from Wikipedia.`

}


/*Making on click function thats show information

let sec5cont = document.getElementById("sec5cont");
sec5cont.addEventListener("click",showinfo5);


function showinfo5(){
  let sec3h3 = document.getElementById("sec3h3");
  sec3h3.classList.add("sec3h3tset");
}

*/


