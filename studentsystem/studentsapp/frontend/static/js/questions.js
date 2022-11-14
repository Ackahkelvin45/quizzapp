var quiz=JSON.parse(localStorage.getItem("quiz"))




var state={
  "queryset":null,
  "rows":5,

}









function setpagination(){


function pagination(questions,page,rows){
  var trimstart=(page-1) * rows
  var trimend=trimstart +rows
  trimeddata=questions.slice(trimstart,trimend)
  pages=Math.ceil(questions.length/rows)
  return{
    "questions":trimeddata,
    "pages":pages
      }
}






xhr = new XMLHttpRequest
xhr.open("GET",`http://127.0.0.1:8000/questions/${quiz.id}`)
xhr.send();
xhr.addEventListener("load",function(){
var  questions=JSON.parse(xhr.responseText);


  state.queryset=questions
m=document.getElementById("pagination")





 var data= pagination(state.queryset,window.pager,state.rows)
var pages=data.pages

m=document.getElementById("pagination")
m.innerHTML=""
for (var i=1;i<=pages;i++){
 

  item=`<button value=${i} class="page bg-gray-300 px-2 mx-1 rounded " onclick="showpage(this)" id="${i}">${i}</button>`
  m.innerHTML+= item
 
}
for (var i=1;i<= pages;i++){
  m=document.getElementById(`${i}`)
 
if (window.pager==m.id){
   m.disabled=true
 
}
  
}
if(pager==pages){
  submit=document.getElementById("submit")
  submit.innerHTML=`<button class="bg-red-400 px-4 rounded-2xl">Submit<button>`
}


  page=document.getElementById("questionspage")
page.innerHTML=""



 questions=data.questions
questions.forEach(function(question){

  item=`
  <div class="flex flex-col px-6" >

 
    <div class="mt-4">
  <div class="font-bold text-xl " >
  ${question.text}
  </div>
  <form  class="flex w-full flex-col text-xl mt-2 items-start " id="${question.id}" >

  </form>
      </div>
      </div>
      
  `

  try {
    page.innerHTML+=item
  } catch (error) {

  }

  function fetch(){
    $.ajax({
      url:`http://127.0.0.1:8000/answers/${question.id}`,
      type:"GET",
      success:function(answers){
        answers.forEach(function(answer){
          
  
  if (question.id==answer.questions){
  space=document.getElementById(`${answer.questions}`)
  
  answeronpage=`
  <div>
  <input type="radio" class ="answer" value="${answer.id}"  name="answer">
  <label for="${answer.text}">${answer.text}</label>
  </div>
  `
  
  
  }

  space.innerHTML+=answeronpage
        })
      }
    
    })
  }
  fetch()


 

 
})




})
}
setpagination()

function showpage(value){
  window.pager=value.value
var n=document.getElementsByName("answer")
if (localStorage.getItem("choosedanswers")===null || localStorage.getItem("choosedanswers").length <= 2){
  var checkedvalues=[]
  for (var i=0,l=n.length;i<l;i++){
   
    if(n[i].checked){
      checkedvalues.push(n[i].value)
    }
    }
var checkedvalue=JSON.stringify(checkedvalues)
localStorage.setItem("choosedanswers",checkedvalue)
}
else if (localStorage.getItem("choosedanswers").length !==0){
var newvalues=[]
  for (var i=0,l=n.length;i<l;i++){
    if(n[i].checked){
     newvalues.push(n[i].value)
    }
    }
    oldvalues=JSON.parse(localStorage.getItem("choosedanswers"))

   if(newvalues.length!==0){
 const output=newvalues.filter(obj=>
  oldvalues.indexOf(obj) === -1)
  
 for (var i=0;i<output.length;i++){
  oldvalues.push(output[i])
 }

 localStorage.setItem("choosedanswers",JSON.stringify(oldvalues))
   }
}





  setpagination()
 }
 var pager=1





req = new XMLHttpRequest
req.open("GET",`http://127.0.0.1:8000/questions/${quiz.id}`)
req.send();
req.addEventListener("load",function(){
var  questions=JSON.parse(req.responseText);
answerarray=[]
for(var i =0;i<questions.length;i++){

  function getanswers(){
    $.ajax({
      url:`http://127.0.0.1:8000/correctanswers/${questions[i].id}`,
      type:"GET",
      success:function(answers){
   
     answers.forEach((answer)=>{
      answerarray.push(`${answer.id}`)
     })
         
      }
        })
      
      
}
getanswers()


}


submit=document.getElementById("submit")
         submit.addEventListener("click",()=>{
          swal({
            title: "Are you sure?",
            text: "Do you want to submit?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {     
              showpage(window.pager)
              choosedanswers=JSON.parse(localStorage.getItem("choosedanswers"))
              const output=choosedanswers.filter(obj=>
                answerarray.indexOf(obj) !== -1)
               
                swal("Sunmitted!", {
                  icon: "success",
                  text:`You hard ${output.length} answers right`,
                  buttons: false,
                  timer: 3000
            }).then(()=>{
              localStorage.removeItem("choosedanswers");
              window.location.href="./quizpage.html"
            })
                   
                    
            } else {
           
            }
          });
       

         })


})


