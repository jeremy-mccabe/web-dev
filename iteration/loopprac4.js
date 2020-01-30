var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
  },{
      name: 'December',
      days: 31
  }];


//#1
  for(var j = 0; j < 12; j++){

  for(var i = 1; i <= months[j].days; i++){
    console.log(months[j].name + ' ' + i)
  }

  }

  //#2
h=0; m=0; s=0;
for(s=0;s<60;s++){
  if(h<24){
  console.log(h + ':' + m + ':' +s)
  if(s==59){ s=-1; m++;}
    for(mh=0;mh<60;mh++){
    if(m==60){m=0;h++}
      if(h==23 && m==59 && s==59){
          break;
        }
        };
        };
        };
