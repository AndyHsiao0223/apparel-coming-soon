import Content from '../content/content';
import SideImg from '../sideImg/sideImg';
import './css/finalPage.css';

export default function FinalPage() {
  return (
    <div id="page">
        <div id='content'>
            <Content />
        </div>
        <div id='sideImg'>
            <SideImg />
        </div>
    </div>
  );
}
