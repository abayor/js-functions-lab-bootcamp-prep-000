
function happyHolidays(){
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days, holiday){
  return `It's ${days} days until ${holiday}!`
}









function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      /*This part will be the same*/
      var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
      /* This part changes based on gender*/

      var pronoun;

      if(this.gender ==='Male'|| this.gender==='M'||this.gender==='male')
      {
        
      pronoun = 'He likes'

      }
      else if(this.gender ==='female'|| this.gender==='F'||this.gender==='Female')
        {
          pronoun = 'She likes'
      }
      else{
        pronoun = "They like"
      }
       
      string += pronoun;

      if(this.interests.length===1){
        string += this.interests[0] + '.';
      }
      else if(this.interests.length===2){
        string += this.interests[0] + 'and'+ this.interests[1] + '.';
      }
      else{
        /*Let's loop through if interest is more than 2*/

        for(var i=0; i<this.interests.length; i++){
            if(i===this.interests.length-1){
              string += 'and ' + this.interests[i] + '.';
            } else {
              string += this.interests[i] + ', ';
            }
            }

        }

         // finally, with the string built, we alert() it
         alert(string);
        };
        this.greeting = function() {
          alert('Hi! I\'m ' + this.name.first + '.');
        };
      };
        var myfunction = function(){
          console.log(this);
          console.log(this===window);
        }
  
  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);



