const path=require('path')
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const express = require('express')
const hbs=require('hbs')
const app = express()

const viewsPath=path.join(__dirname,'../templetes/views')
const partialsPath=path.join(__dirname,'../templetes/partials')

app.set('view engine','hbs')//which temolete we use
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)//where header and footer
app.use(express.static(path.join(__dirname,'../public')))//custimize server

app.get('',(req,res)=>{
res.render('index',{
    title:'weather app',
    name:'sharaf'
})//express use templete handler to render view
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'sharaf'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helptext:'this is some helpful text',
        title:'help',
        name:'sharaf'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({error:'you must provide search term'}) 
    }
    //res.send([{address:req.query.address}])
    geocode(req.query.address, (error, {latitude,longitude,location}={}) => {
        if (error) return res.send({error})
      
        forecast(latitude, longitude, (error, response) => {
            if (error) {
                return res.send({error})
    
            }
         
    
            res.send({forecast:response,
            location,
        address:req.query.address})
    
    
    
        })
    
    
    
    })

})
app.get('/products',(req,res)=>{
    if (!req.query.search) {
       return res.send({error:'you must provide search term'})
    }
console.log(req.query.search)//query string in url
res.send({
    products:[]
})

})
app.get('/help/*',(req,res)=>{
res.render('error',{
    error404:'help article not found',
    name:'sharaf'
})

})
//wild card matching any thing is not avaliable
app.get('*',(req,res)=>{
res.render('error',{
    error404:'404 page not found',
    name:'sharaf'
})

})
app.listen(3000, () => {
    console.log('3000')
})