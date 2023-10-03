import sideImg from './hero-desktop.jpg';
import './css/sideImg.css';

export default function SideImg() {
  return (
    <div>
      <img src={sideImg} alt="sideImg" id="sideImg"></img>
    </div>
    
  );
}
