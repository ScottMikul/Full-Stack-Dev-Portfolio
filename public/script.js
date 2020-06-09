$(()=>{



    //animate the subtitle of the title
    let words = ["Gamer", "Adventurer", "Professional IT Developer"]
    let txt = words[0];
    let word = "";
    let wordIndex = 0;
    let charIndex = 0;
    let speed = 50;
    
    typeWriter = () =>{
        if (charIndex < txt.length) {
             word += txt.charAt(charIndex++);
             
            $("#subtitle").text(word);
            //console.log("word");
            setTimeout(typeWriter, speed);
            
        }
        else if(wordIndex < words.length-1){
            charIndex = 0;
            word ="";
            
            txt = words[++wordIndex]
            
            setTimeout(typeWriter, 800);   
        }
    }
    typeWriter();

    
   


    //figure out the heights of each element

    // let navElems =  [$("#home_sidebar"),
    //     $("#about_sidebar"),
    //     $("#work_sidebar"),
    //     $("#technologies_sidebar"),
    //     $("#contact_sidebar")
    // ]

    // //the heights change on window resizing so figure out the heights then also.
    // $(window).resize(()=>{
    //     console.log("window is resizing");
    //     updateHeights()})

    // $(window).scroll(function() {
        

    //     console.log("scrolltop: "+ $(window).scrollTop());
    //     updateHeights();

    //     var currItemIndex = heights.findIndex(item=> {
    //         console.log((item+1)+ " !< " + $(window).scrollTop() );
    //         return !((item+1) <  $(window).scrollTop()) });
    //     //remove active on each Element
    //     navElems.forEach(elem => { 
    //          elem.removeClass("active")
    //     });

    //     currItem = navElems[currItemIndex];
    //     currItem.addClass("active",true);

       
    // })




})