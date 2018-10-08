$(document).ready(function() {
    dyanmic_quarter_label();
    console.log("WINDOW LOADED!");
    $('#player-cocoon').on('cocoon:after-insert', function(e, insertedItem){
        console.log("I ADDED A ROW");
        dyanmic_quarter_label();
    });
});
  
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

  function player_activation(button){
    row = button.parentNode.parentNode
    if(row.classList[1] == "tr-green"){
      $(row).removeClass("tr-green");
      $(row).addClass("tr-grey");
      $(button).html('Activate');
    } else if (row.classList[1] == "tr-grey") {
      $(row).removeClass("tr-grey");
      $(row).addClass("tr-green");
      $(button).html('Deactivate');
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
        row = play_counter.parentNode.parentNode.parentNode
        if(row.classList.value.split(" ").indexOf("tr-green") > -1){
            if(play_counter.value == '' || play_counter.value == 0)
            {
                play_counter.value = 1;
            } else {
                play_counter.value ++;
            }
        }
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
        var text_target = "";
        input_div = node.childNodes[1];
        label_tag = input_div.childNodes[0]
        input_tag = input_div.childNodes[1]
        swap_class(target, input_div);
        label_tag.textContent = titleCase(quarter_to_word(target).replace("_"," ")) + " Plays";
        for_string = $(label_tag).attr('for');
        for_string = swap_quarter_for_player(for_string, target);
        $(label_tag).attr('for', swap_quarter_for_player(for_string, target));
        $(input_tag).attr('id', for_string)
        nameString = $(input_tag).attr('name');
        player_id = nameString.split(/\[(.*?)\]/)[3];
        new_name = "game[players_attributes][" + player_id + "][" + quarter_to_word(target) + "_plays]";
        $(input_tag).attr('name', new_name);
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

