

function Person(fn,ln){
    this.firstName=fn;
    this.lastName=ln;
    console.log(this);
}

Person.prototype.getFullName=function(){
    console.log(this.firstName+" is "+ this.lastName );
}


function Student(fn,ln,sn){
   //call() inherit the method from person, so the attribute of person also in the student
   //call excute the Person(fn,ln) but the object changing from person to  student
    Person.call(this,fn,ln);
    this.schoolName=sn
    console.log(this);
}
    Student.prototype = Person.prototype;

var p=new Person("zhao","sa");
var std=new Student("zhao","hu","msu");

//p.getFullName();
std.getFullName();
