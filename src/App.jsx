import "./App.css";

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function IntroSection() {
  //Todo 1: ให้ Declare ตัว Variable articleStyles เป็น Object ใน Component IntroSection โดยที่ articleStyles มี Key-Value Pair
  const articleStyles = {
    container: "article",
    title: "article-title",
    body: "article-body",
    link: "article-link",
  };
  return (
    //Todo 2: ให้กำหนด className ให้กับ HTML Element เหล่านี้ในไฟล์ App.jsx เพื่อใช้งาน CSS Rule จากไฟล์ App.css
    //HTML Element <div> ที่เป็น Parent ของ <h3> <p> และ <a> จะต้องมี className เป็นค่าของ Property container ใน Object articleStyles
    // HTML Element <h3> จะต้องมี className เป็นค่าของ Property title ใน Object articleStyles
    // HTML Element <p> จะต้องมี className เป็นค่าของ Property body ใน Object articleStyles
    // HTML Element <a> จะต้องมี className เป็นค่าของ Property link ใน Object articleStyles
    <div className={articleStyles.container}>
      {/* <div className="article"> */}

      <h3 className={articleStyles.title}>TechUp Thailand</h3>
      <p className={articleStyles.body}>
        เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน
      </p>
      <a
        className={articleStyles.link}
        href="https://www.techupth.com/"
        target="blank"
      >
        techupth.com
      </a>
      <div className="bootcamp-start-time">
        วันเวลาเริ่มหลักสูตร คือ {getCurrentDateTime()}
        {" Hello !"}
      </div>
    </div>
  );
}

//Todo 1: ให้แก้ไขการเขียน Attribute ของ JSX ใน Component LoginForm ของไฟล์ App.jsx ให้ถูกต้องตามหลักการเขียน JSX
function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <IntroSection />
      <LoginForm />
    </div>
  );
}

export default App;
