"use strice";

$(init);
function init() {
  createProjects();
  renderPortfolio();
}

function renderPortfolio() {
  var projects = getProjects();
  const strHTMLs = projects.map((proj) => {
    var str = `<div class="col-md-4 col-sm-6 portfolio-item">
     <a onClick="renderProtfolioModal(this)" class="portfolio-link" data-toggle="modal" href="#portfolioModal" id="${proj.id}">
     <div class="portfolio-hover">
       <div class="portfolio-hover-content">
         <i class="fa fa-plus fa-3x"></i>
       </div>
     </div>
     <img class="img-fluid" src="img/portfolio/Game.png" alt="">
   </a>
   <div class="portfolio-caption">
     <h4>${proj.name}</h4>
     <p class="text-muted">${proj.title}</p>
   </div>
 </div>`;
    return str;
  });
  var str = strHTMLs.join("");
  $(".main-protfolio").html(str);
}

function renderProtfolioModal(el) {
  var id = el.id;
  var proj = getProj(id);
  $(".pj-name").html(proj.name);
  $(".pj-title").html(proj.title);
  $(".desc").html(proj.desc);
  var date = formatDate(proj.publishedAt);
  $(".date").text(date);
  var labels = proj.labels;
  var str = labels.toString();
  $(".pj-labels").text(str);
  $(".pj-link").attr("href", proj.url);
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}

function sendToEmail() {
  var email = $("#email").val();
  var subject = $("#subject").val();
  var body = $(".msg").val();
  console.log(email, subject, body);
  window.open(
    (url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`)
  );
}
