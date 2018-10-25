document.addEventListener("turbolinks:load", function() {
    if($("#play-form").length > 0){
        $('#player-cocoon').on('cocoon:after-insert', function(e, insertedItem){
            dyanmic_quarter_label();
        });
        dyanmic_quarter_label();
        check_activations();
    }
})

  
  function quarter_to_word (num){
    var numString = "";
  switch(num) {
    case 1:
    numString = "quarter_one";
        break;
    case 2:
    numString = "quarter_two";
        break;
    case 3:
    numString = "quarter_three";
        break;
    case 4:
    numString = "quarter_four";
        break;
    case 5:
    numString = "overtime";
        break;
    default:
    numString = "quarter_one";
    } 
    return numString;
  }

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

 function check_activations(){
    $('.activator').each(function(index, tdNode){
        checkboxNode = tdNode.children[1].children[0].children[1].children[0]
        if(checkboxNode.checked == true){
            player_activation(tdNode.firstElementChild);
        } 
    })
}



function player_activation(button){
    row = button.parentNode.parentNode
    checkbox = button.nextElementSibling.children[0].children[1].children[0]
    //if on turn off
    if(row.classList[1] == "tr-green"){
      $(row).removeClass("tr-green");
      $(row).addClass("tr-grey");
      $(button).html('Off');
      $(button).removeClass("btn-on-field");
      $(button).addClass("btn-off-field");
      checkbox.checked = false;
      //if off turn on
    } else if (row.classList[1] == "tr-grey") {
      $(row).removeClass("tr-grey");
      $(row).addClass("tr-green");
      $(button).html('On');
      $(button).removeClass("btn-off-field");
      $(button).addClass("btn-on-field");
      checkbox.checked = true;
    }
}
  

  function play_count(){
    var current_quarter = 1      
    $("input[id^='game_current_quarter_'").each(function(index, quarter){
        if(quarter.checked){
            current_quarter = index + 1;
        }
    });
    
    $("input[id$='" + quarter_to_word(current_quarter) + "_plays']").each(function(index, play_counter){
        if(play_counter.parentNode.parentNode.classList.contains("tr-grey") == false){
            if(play_counter.value == '' || play_counter.value == 0)
            {
                play_counter.value = 1;
            } else {
                play_counter.value ++;
            }
            play_counter.parentNode.nextSibling.nextSibling.getElementsByTagName('span')[0].innerText ++;
        };
    });
  }
  
  function swap_class(target, node){
    $(node).removeClass(function (index, className) {
        return (className.match (/\game_players_\S+/g) || []).join(' ');
    }).addClass("game_players_" + quarter_to_word(target) + "_plays");
  }

  function swap_quarter_for_player(original, target) {
      var new_for = "";
      if(original.indexOf("quarter")) {
        arr = original.split("_");
        if(quarter_to_word(target).split("_").count > 1) {
            arr.splice(4,2,quarter_to_word(target).split("_")[0], quarter_to_word(target).split("_")[1]);
        } else {
            arr.splice(4,2,quarter_to_word(target));
        }
        new_for = arr.join("_");
      } else {
        arr = original.split("_");
        if(quarter_to_word(target).split("_").count > 1) {
            arr.splice(4,1,quarter_to_word(target).split("_")[0], quarter_to_word(target).split("_")[1]);
        } else {
            arr.splice(4,1,quarter_to_word(target));
        }
      }
      return new_for;
  }

    function change_input_quarter (target, node) {
        $(node).children('input').each(function (index, fieldNode) {
            
            if(!$(fieldNode).hasClass('hidden')){
                $(fieldNode).addClass('hidden');
                fieldNode.type = "hidden";
            }
            if(index == target - 1){
                $(fieldNode).removeClass('hidden');
                fieldNode.type = "number";
            }
        });        
    }

  function dyanmic_quarter_label () {
    if($("#game_current_quarter_1")[0].checked == true){
        $(".dynamic_quarter_counter").each(function (index, node) {
            change_input_quarter(1,node);
        });
    } else if ($("#game_current_quarter_2")[0].checked == true){
        $(".dynamic_quarter_counter").each(function (index, node) {
            change_input_quarter(2,node);
        });
        
    } else if ($("#game_current_quarter_3")[0].checked == true){
        $(".dynamic_quarter_counter").each(function (index, node) {
            change_input_quarter(3,node);
        });
    } else if ($("#game_current_quarter_4")[0].checked == true){
        $(".dynamic_quarter_counter").each(function (index, node) {
            change_input_quarter(4,node);
        });
    } else if ($("#game_current_quarter_5")[0].checked == true){
        $(".dynamic_quarter_counter").each(function (index, node) {
            change_input_quarter(5,node);
        });
    }
  }

