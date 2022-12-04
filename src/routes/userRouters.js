const { Router } = require("express");
const routes = Router();

const users = [
  { id: 1, username: "admin", firstName: "Admin", lastName: "System" },
  { id: 2, username: "staff", firstName: "Staff", lastName: "" },
  { id: 3, username: "customer", firstName: "John", lastName: "Doe" },
];

routes.get("/", (req, res) => {
  res.json(users);
});

routes.get("/:userid", (req, res) => {
  const data = users.find((user) => {
    return user.id == req.params.userid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

routes.post("/",(req,res)=>{
  const data = req.body;

  const {username,email,password}=data;
  const newUser={id: 43,username,password,email};
  if(!data){
    res.status(400).json({message: "user data is required"});
  }else{
    res.status(201).json({
      ok:true,
      message: "usuario creado",
      payload: newUser
    });
  }
});

module.exports = routes;
