

function showNav(){
  show =document.getElementById("show")
  cursor=document.getElementById("cursor")
   
   if (show.style.display===""){
    show.style.display="flex"
    cursor.style.pointerEvents="none"
   }
   else{
    show.style.display=""
    cursor.style.pointerEvents=""
   }
   
}
console.log(localStorage.getItem("token"))
var xhr =new XMLHttpRequest
xhr.open("GET","http://127.0.0.1:8000/courses/")
xhr.setRequestHeader("Authorization",JSON.parse(localStorage.getItem("token")))
xhr.send()
xhr.addEventListener("load",()=>{
  var  courses=JSON.parse(xhr.responseText);
  console.log(courses)
 
  coursecard=document.getElementById("course-card")
  show =document.getElementById("show")
  for (var i in courses){
 if (courses[i].hasOwnProperty("name")){
  
    var item =`    
    <div class=" course w-full   h-52  flex flex-col shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:scale-105 ease-out duration-300  " id=${courses[i].id} onclick="showCase(this)" class="course">
    <div class="w-full   h-1/2    "  style="background-color:${courses[i].course_color};   ">
         
            </div>
            <div class="bg-gray-200 w-full h-1/2">
              
              <div class="flex flex-row w-full justify-between">
              <span class="ml-2 ">Year 1 semester 2</span>
              <select class="w-4 mr-2 bg-gray-200 ">
                <option>open course</option>
                <option>remove  from view</option>
              </select>
            </div >
               <div class="flex  flex-col mt-4">
                <span class="ml-2">${courses[i].name}</span>
                <span  class="ml-2">${courses[i].course_teacher}</span>
               </div>
            </div>
  </div>
  `
   
  var item2=`
  <div class="w-full bg-gray-200 px-4 flex flex-row py-2  hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 duration-500" > <img src="../src/img/course2.png" height="20px" width="30px"/><span class=" ml-3 text-md  mt-1">${courses[i].name}</span></div>`
  show.innerHTML+=item2
    coursecard.innerHTML+=item
  
  
  }else{

    swal({
     
      text: "User must Log in!",
      icon: "warning",
      button: "OK",
    }).then(()=>{
      window.location.href="./login.html"
    })
  }
}


})



username=JSON.parse(localStorage.getItem("username"))
n=document.getElementById("username")
n.innerHTML+=username

function showCase(card){

  xhr = new XMLHttpRequest
  xhr.open("GET","http://127.0.0.1:8000/courses/")
  xhr.setRequestHeader("Authorization",JSON.parse(localStorage.getItem("token")))
  xhr.send();
  xhr.addEventListener("load",function(){
  
    const courses=document.querySelectorAll(".course")
    console.log(courses)
    var  course=JSON.parse(xhr.responseText);
    for (var i in course){
      if (course[i].id ==card.id){
      let chosedcourse=JSON.stringify(course[i])
    localStorage.setItem("course",chosedcourse)
  
      }
  
      window.location.href="./quizpage.html"
  
  
  }
  
    
    
      
   
  })
  
  }
  
