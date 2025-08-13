const express = require('express');
var hbs = require('hbs');

const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

const app = express();

hbs.registerPartials(__dirname + '/views/partials', function (err) {});




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const uploads = multer({ storage: storage })



app.post('/profile', uploads.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body);
  console.log(req.file)

  return res.redirect("/home")

})





app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{
    companyName: "XYZ COMPANY",
    founder: "ssss"
  })
})

app.get("/products",(req,res)=>{
  res.render("products.hbs",{
    products: ["WATCH","SHOES","GLASSES"]
  })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



