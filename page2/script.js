
var container = $(`.container`)
var submit = $(`.submit-btn`);
var match = $(`.animalMatch`);

submit.on("click", printProfile);

function printProfile(){
  printName();
  printAnswers();
  printAnimal();
 }

function printName(){
   event.preventDefault();
  var name = $(`.name`).val();
  container.append(`<h2> Congrats ${name}! Your profile has been created.</h2>`)
 }

function printAnswers(){
  event.preventDefault();
  printDOB();
  printPreferred();
  printReason();
 }

 function printDOB(){
   event.preventDefault();
   var dob = $(`.dob`).val();
   container.append(`<p> Birthday: ${dob} </p>` )
 }

 function printPreferred(){
   event.preventDefault();
   var animal = $(`.animal`).val();
   container.append(`<p> Preferred Animal: ${animal}</p>`)
 }

  function printReason(){
    event.preventDefault();
   var reason = $(`.reason`).val();
   container.append(`<p> Reason for Therapy: ${reason}</p>`)
  }
  
function printAnimal(){
  var animal = $(`.animal`).val();
  if(animal == "dog"){
    container.append(`<h4> Daisy </h4>
    <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg">`)
  }
  else if(animal == "cat"){
    container.append(`<h4>Pepper</h4>  <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg">`)

  }
  else if (animal == "rabbit")
    container.append(`<h4> BunBun </h4> <img src="https://www.telegraph.co.uk/content/dam/news/2019/10/13/TELEMMGLPICT000211570538_trans_NvBQzQNjv4Bq1AT3Q7Sc9uaffdHBes0nLkYMapKPjdhyLnv9ax6_too.jpeg?imwidth=450">`)  
    
}
