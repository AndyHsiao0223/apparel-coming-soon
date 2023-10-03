import logo from './logo.svg';
import './css/content.css';
import EmailForm from '../inputForm/inputForm'

export default function content() {
  return (
    <div id="content">
      <img src={logo} alt="logo" id="logo"></img>

      <h1 id="title">
        <span id="pinkTitle">WE'RE<br /></span>
        <span id="grayTitle">
          COMING<br />
          SOON
        </span>
      </h1>

      <p id="text">
        Hello fellow shoppers! We're currently building our new <br />
        fashion store. Add your email below to stay up-to-date with <br />
        announcements and our launch deals.
      </p>

      <EmailForm />
    </div>
  );
}
