var data;
var flag = 0;

function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      data = JSON.parse(this.responseText);
      console.log(data);
      var gallery1 = document.getElementById("gall1");
      var gallery2 = document.getElementById("gall2");
      var gallery3 = document.getElementById("gall3");
      for (i = 0; i < data.length; i++) {
        var test = document.createElement('li');
        var divfig = document.createElement('figure');
        var divimg = document.createElement('img');

        divimg.src = data[i].image_url;
        divfig.classList.add('gallery-photo');
        divfig.appendChild(divimg);
        test.appendChild(divfig);
        if (i < 3)
          gallery1.appendChild(test);
        else if (i > 2 && i < 6)
          gallery2.appendChild(test);
        else if (i > 5 && i < 9)
          gallery3.appendChild(test);
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/data", true);
  xhttp.send();
}

function byNameSearch() {
  var heading = document.getElementById('heading');
  var results1 = document.getElementById('results1');
  if (flag == 1) {
    var headt = document.getElementById('headt');
    console.log(headt);
    heading.removeChild(headt);
    var responsiven = document.getElementById('responsiven');
    console.log(responsiven);
    results1.removeChild(responsiven);
    flag = 0;
  }
  var name = document.getElementById('name').value;
  console.log(name);

  var h2 = document.createElement('h2');
  h2.innerHTML = "Search Results";
  h2.setAttribute("id", "headt");

  for (i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      console.log(data[i]);
      var responsive = document.createElement('li');
      responsive.classList.add('responsiven');
      responsive.setAttribute('id', 'responsiven');
      var gallery = document.createElement('figure');
      gallery.classList.add('gallery');
      var desc = document.createElement('div');
      desc.classList.add('desc');
      var p = document.createElement('p');
      var imgs = document.createElement('img');
      imgs.src = data[i].image_url;
      var cname = '';
      cname = cname.concat('<h4><i>Name: </i></h4>', data[i].name, '<br>',
        '<h4><i>Quote: </i></h4>', data[i].quote, '<br>',
        '<h4><i>Birthdate: </i></h4>', data[i].birthday, '<br>');
      gallery.appendChild(imgs);
      p.innerHTML = cname;
      desc.appendChild(p);
      gallery.appendChild(desc);
      responsive.appendChild(gallery);
      results1.appendChild(responsive);
      heading.appendChild(h2);
      document.getElementById('name').value = '';
      flag = 1;
    }

  }
}

function byDates() {
  var smonth = document.querySelector('#smonth');
  var syear = document.querySelector('#syear');
  var sday = document.querySelector('#sday');
  var emonth = document.querySelector('#emonth');
  var eyear = document.querySelector('#eyear');
  var esday = document.querySelector('#eday');

  smonth = smonth.value
  syear = syear.value
  sday = sday.value
  emonth = emonth.value
  eyear = eyear.value
  eday = eday.value
  var sdate = '';
  sdate = sdate.concat(smonth, ' ', sday, ', ', syear);
  var edate = '';
  edate = edate.concat(emonth, ' ', eday, ', ', eyear);
  console.log(sdate);
  console.log(edate);

  var d1 = Date.parse(sdate);
  var d2 = Date.parse(edate);
  var results1 = document.getElementById("results1");
  var results2 = document.getElementById("results2");
  var results3 = document.getElementById("results3");
  var heading = document.getElementById('heading');
  var h2 = document.createElement('h2');
  h2.innerHTML = "Search Results";
  var count = 0;
  for (i = 0; i < data.length; i++) {
    var datetemp = Date.parse(data[i].birthday);
    if (d2 <= datetemp && datetemp <= d1) {
      console.log(data[i]);
      var results = document.getElementById('results');
      var responsive = document.createElement('li');
      responsive.classList.add('responsive');
      var gallery = document.createElement('figure');
      gallery.classList.add('gallery');
      var desc = document.createElement('div');
      desc.classList.add('desc');
      var p = document.createElement('p');
      var cname = '';
      cname = cname.concat('<h4><i>Name: </i></h4>', data[i].name, '<br>',
        '<h4><i>Quote: </i></h4>', data[i].quote, '<br>',
        '<h4><i>Birthdate: </i></h4>', data[i].birthday, '<br>');
      var imgs = document.createElement('img');
      imgs.src = data[i].image_url;
      gallery.appendChild(imgs);
      p.innerHTML = cname;
      desc.appendChild(p);
      gallery.appendChild(desc);
      search.appendChild(row);
      responsive.appendChild(gallery);
      if (count < 3) {
        results1.appendChild(responsive);
        count++;
      } else if (count > 2 && count < 6) {
        results2.appendChild(responsive);
        count++;
      } else if (count > 5 && count < 9) {
        results3.appendChild(responsive);
        count++;
      }
    }
  }
  heading.appendChild(h2);
}