function calculTotal(){
    var all_input = document.getElementById("tab").getElementsByTagName("input");
    var total = 0;
    for (i=0;i<all_input.length;i++){
        total = total + parseFloat(all_input[i].value);
    }
    document.getElementById("montanttotal").value = total;
}