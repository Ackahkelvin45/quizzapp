var course=JSON.parse(localStorage.getItem("course"))
console.log(course)

addEventListener("load",function(){
  title=document.getElementById("title")
  title.innerHTML+=course.name
  })

  xhr = new XMLHttpRequest
xhr.open("GET",`http://127.0.0.1:8000/coursequiz/${course.id}`)
xhr.send();
xhr.addEventListener("load",function(){
  var  quiz=JSON.parse(xhr.responseText);
  show=document.getElementById("show")
  
  for(var i in quiz){
    quizcard=`
    <div class=" w-full h-44  bg-gray-200 rounded-xl hover:scale-105 duration-500 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]" id=${quiz[i].id} onclick="showQuestions(this)">
    <div class=" flex ml-12 flex-col ">
    <span class="text-xl mt-4 font-bold"> ${quiz[i].name} </span>
      <span class="text-xl mt-2"> ${quiz[i].number_of_questions} Questions</span>
         <span class="text-xl  "> ${quiz[i].time} minutes</span>
         
    </div>
    <div class="flex w-ful justify-center mt-4">
      <button class="bg-green-400 px-3 py-2 text-white text-xl rounded-xl  " >Attmept Quiz</button> 


  </div>

</div>

    `
show.innerHTML +=quizcard

  }

})

function home(){
  window.location.href("./index.html")
}


function showQuestions(quiz){

  xhr = new XMLHttpRequest
  xhr.open("GET",`http://127.0.0.1:8000/coursequiz/${course.id}`)
  xhr.send();
  xhr.addEventListener("load",function(){
    
    var  quizs=JSON.parse(xhr.responseText);
    
  
    for (var i in quizs){
      if (quizs[i].id==quiz.id){
   
        let chosedquiz=JSON.stringify(quizs[i])
        localStorage.setItem("quiz",chosedquiz)
      }
  
  
    }
    window.location.href="./questions.html"
  
  
  })
  
  }