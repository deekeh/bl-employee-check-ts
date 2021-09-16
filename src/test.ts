// class - access modifier
class User {
  public userName: string;
  private userId: string;
  protected password: string;

  constructor(
    userName: string = "anonymous",
    userId: string = "",
    password: string = ""
  ) {
    this.userName = userName;
    this.userId = userId;
    this.password = password;
  }
}

class Employee extends User {
  public department: string;

  constructor(
    userName: string = "anonymous",
    userId: string = "",
    password: string = "",
    department: string = ""
  ) {
    super(userName, userId, password);
    this.department = department;
  }
}

let dk = new User();
dk.userName = "darshan";
// dk.userId = "asd1234";

let nb = new Employee();
console.log(nb.userName);

// decorators
function d1() {
  console.log("d1")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("d1 in")
  }
}
function d2() {
  console.log("d2")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("d2 in")
  }
}
class ClassName {
  @d1()
  @d2()
  method() {
    console.log("method")
  }
}

const cls = new ClassName();
cls.method();
