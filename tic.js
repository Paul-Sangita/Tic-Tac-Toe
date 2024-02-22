

function myfunc(){   // Function called whenever user tab on any box 

    
     // Setting DOM to all boxes or input field 
     var b1, b2, b3, b4, b5, b6, b7, b8, b9;
     b1 = document.getElementById("b1").value;
     b2 = document.getElementById("b2").value;
     b3 = document.getElementById("b3").value;
     b4 = document.getElementById("b4").value;
     b5 = document.getElementById("b5").value;
     b6 = document.getElementById("b6").value;
     b7 = document.getElementById("b7").value;
     b8 = document.getElementById("b8").value;
     b9 = document.getElementById("b9").value;
    
     var btn1, btn2, btn3, btn4, btn5, btn6, btn7,btn8,btn9;
     btn1 = document.getElementById("b1");
     btn2 = document.getElementById("b2");
     btn3 = document.getElementById("b3");
     btn4 = document.getElementById("b4");
     btn5 = document.getElementById("b5");
     btn6 = document.getElementById("b6");
     btn7 = document.getElementById("b7");
     btn8 = document.getElementById("b8");
     btn9 = document.getElementById("b9");

       // Checking if Player X won or not and after 
    // that disabled all the other fields 
    //left column start
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
    b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }
    else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
    b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn2.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn3.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";
    }
    else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
    b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn3.disabled = true;
        btn8.disabled = true;
        btn7.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";
    }
    //left column end 
    //middle column start

    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
    b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn7.disabled = true;
        btn6.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }

    
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
    b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn2.disabled = true;

        btn7.style.color = "red";
        btn9.style.color = "red";
        btn8.style.color = "red";
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
    b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn2.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
//middle column end
//right column start
     
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
    b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn9.style.color = "red";
        btn6.style.color = "red";
    }

    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
    b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById("print").innerHTML="Player X won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn9.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }
    // Checking of Player X finish 
    // Checking for Player 0 starts, Is player 0 won or 
    // not and after that disabled all the other fields

    else if ((b1 == 'o' || b1 == '0') && (b2 == 'o' || 
    b2 == '0') && (b3 == 'o' || b3 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }
    else if((b1 == 'o' || b1 == '0') && (b4 == 'o' || 
    b4 == '0') && (b7 == 'o' || b7 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn2.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn3.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";
    }
    else if((b1 == 'o' || b1 == '0') && (b5 == 'o' || 
    b5 == '0') && (b9 == 'o' || b9 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn3.disabled = true;
        btn8.disabled = true;
        btn7.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";
    }
    //left column end 
    //middle column start

    else if ((b2 == 'o' || b2 == '0') && (b5 == 'o' || 
    b5 == '0') && (b8 == 'o' || b8 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn7.disabled = true;
        btn6.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }

    
    else if ((b7 == 'o' || b7 == '0') && (b8 == 'o' || 
    b8 == '0') && (b9 == 'o' || b9 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn2.disabled = true;

        btn7.style.color = "red";
        btn9.style.color = "red";
        btn8.style.color = "red";
    }
    else if ((b4 == 'o' || b4 == '0') && (b5 == 'o' || 
    b5 == '0') && (b6 == 'o' || b6 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn3.disabled = true;
        btn2.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
//middle row end
//right row start
     
else if ((b3 == 'o' || b3 == '0') && (b6 == 'o' || 
    b6 == '0') && (b9 == 'o' || b9 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn9.style.color = "red";
        btn6.style.color = "red";
    }

    else if ((b3 == 'o' || b3 == '0') && (b5 == 'o' || 
    b5 == '0') && (b7 == 'o' || b7 == '0')) { 
        document.getElementById("print").innerHTML="Player 0 won."
        document.getElementById("print").style.color = "red"
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn9.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }
    // Checking of Player 0 finish 
    // Here, Checking about Tie 
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
            b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
            b8 == '0') && (b9 == 'X' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Match Tie"; 
    } 
    else { 
  
        // Here, Printing Result 
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player 0 Turn"; 
        } 
    } 
}
    function myfunc_2() { 
        location.reload(); 
        b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
    } 

    // Here onwards, functions check turn of the player 
// and put accordingly value X or 0 
flag = 1; 
function myfunc_3() { 
    if (flag == 1) { 
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b1").value = "0"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
} 

function myfunc_4() { 
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b2").value = "0"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
} 
function myfunc_5() { 
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b3").value = "0"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
} 


function myfunc_6() { 
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b4").value = "0"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
} 

function myfunc_7() { 
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b5").value = "0"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
} 
function myfunc_8() { 
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b6").value = "0"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
}
function myfunc_9() { 
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b7").value = "0"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
} 

function myfunc_10() { 
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b8").value = "0"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
} 
function myfunc_11() { 
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b9").value = "0"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
}
