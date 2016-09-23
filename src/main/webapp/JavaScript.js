/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//var Object = {
//    Studentid: 1, 
//    Studentname:"Yunas", 
//    Studenttage:12529
//    
//    
//}; 

//var Object = [ Object.Studentid, Object.Studentname, Object.Studenttage];
//
////console.log(Object.Studentid,Object.Studentname, Object.Studenttage);
//console.log(typeof Object);


//var Object2 = {
//    studentId : 9845,    
//    studentName: "Yunas"
//    
//    
//    
//};


var StudentsList = 
        [{StudentName :"Yunas", Age:20, StudentGender:false}
    , {StudentName:"Ayub",Age: 16,StudentGender:false},
    {StudentName:"Sara", Age:12, StudentGender:true}];

   function YoungStud (){
    var b = StudentsList[0];
    for (var i = 1; i < StudentsList.length; i++) {
        if (b.Age > StudentsList[i].Age) {
            b = StudentsList[i];
        }
    }
    return b;

}

//function AllFemale(){
//    var FemaleArray=[];
//    for (var i = 0; i < StudentsList.length; i++){
//        if(StudentsList[i].StudentGender=== true){
//            
//            FemaleArray.push(StudentsList[i]);
//   
//        }
//        
//    }
//    return FemaleArray;
//}
   
   console.log(YoungStud());
   
   
function Loop(){
    
    var b = StudentsList[0];
    for (var i = 1; i > StudentsList.length; i++) {
        if (b.Age <= StudentsList[i].Age) {
            b = StudentsList[i];
        }
    }
    return b;

}
    
console.log(Loop());


//
//
//function BGHover(){
//    var names = document.getElementsByTagName("ul");
//    var velkommen = document.getElementsByTagName("ul1");
//    
//    for(var i = 0; i<names.length; i++){
//        names[i].style.backgroundColor = "green";
//        
//    };
//    
//    for(var i = 0; i<names.length; i++){
//      velkommen[i].style.backgroundColor = "blue";  
//    }
//};
//    
//    
//    
//    function DivEvent(){
//        var diven = document.createElement("TheDiv");
//        diven.setAttribute("id", "TheDiv");
//        document.getElementById("TheDiv").style.background = "blue";
//    }
       
       
    
 
