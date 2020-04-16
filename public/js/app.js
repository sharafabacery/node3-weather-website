console.log('mama 7lwa')


//turn on api from browser 
const searchloc=(loc)=>{fetch('/weather?address='+(loc)).then((response)=>{
response.json().then((data)=>{
    /** */
   if(data.error){
    p.textContent= data.error
   }else{
    p.textContent= data.location
    p2.textContent= data.forecast
     }
}
)


})}

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const p=document.querySelector('#p1')
const p2=document.querySelector('#p2')
p.textContent=""
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
//default behavior false
p.textContent="loading .................."
p2.textContent=".........................."
const location=search.value
 searchloc(location)





})