const mysql = require("mysql2"); // 첫 DB 사용이므로 조금 미숙함
const dbInfo = require("../mysqlConfig.json");

const connection = mysql.createConnection(dbInfo);

connection.connect((err) => {
  // err은 콜백 함수를 위한 매개변수
  if (err) {
    // ((err) => {...}) 콜백함수
    console.error("Error connecting to MySQL database", err);
    return;
  }
  console.log("Connected to MySql database");
});

exports.signup = (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  connection.query(checkUserQuery, [email], (error, results) => {
    // Node.js에서는 콜백 함수의 첫 번째 매개변수로 오류를, 두 번째 매개변수로 성공 결과를 넘기는 것이 일반적인 관례
    if (error) {
      return res.status(500).send("Error checking user in databse"); // 500은 서버 잘못
    }

    if (results.length > 0) {
      return res.status(400).send("User already exists with this email"); // 400은 너 잘못
    }

    const addUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";
    connection.query(addUserQuery, [email, password], (error) => {
      if (error) {
        return res.status(500).send("Error adding user to database");
      }

      res.status(201).send("User created"); // 201은 성공 후 리소스, 200은 성공
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const getUserQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
  connection.query(getUserQuery, [email, password], (error, results) => {
    if (error) {
      return res.status(500).send("Error fetching user from database");
    }

    if (results.length == 0) {
      return res.status(400).send("Invalid credentials");
    }

    res.send("Login succesful");
  });
};
