// function search() {
 
//    var name = document.getElementById("searchForm").elements["searchItem"].value;
//    var pattern = name.toLowerCase();
//    var targetId = "";
 
//    var divs = document.getElementsByClassName("col-md-2");
//    for (var i = 0; i < divs.length; i++) {
//       var para = divs[i].getElementsByTagName("p");
//       var index = para[0].innerText.toLowerCase().indexOf(pattern);
//       if (index != -1) {
//          targetId = divs[i].parentNode.id;
//          document.getElementById(targetId).scrollIntoView();
//          break;
//       }
//    }  
// }

var TRange = null;

function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        // CODE FOR BROWSERS THAT SUPPORT window.find
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    } else if (navigator.appName.indexOf("Microsoft") != -1) {
        // EXPLORER-SPECIFIC CODE        
        if (TRange != null) {
            TRange.collapse(false)
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
        if (TRange == null || strFound == 0) {
            TRange = self.document.body.createTextRange()
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
    } else if (navigator.appName == "Opera") {
        alert("Opera browsers not supported, sorry...")
        return;
    }
    if (!strFound) alert("String '" + str + "' not found!")
        return;
};

document.getElementById('f1').onsubmit = function() {
    findString(this.t1.value);
    return false;
};