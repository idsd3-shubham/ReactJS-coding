import 'bootstrap/dist/css/bootstrap.min.css';
import { Destructur } from './page/destructur';
import { Props } from './page/props';
import { State } from './page/state';
import { Usestate } from './page/Usestate';
import { Useeffect } from './page/Useeffect';
import { Useref } from './page/Useref';
import { PropDriling } from './page/PropDriling';
import { Createcontext } from './page/Createcontext';
import { Usecontext } from './page/Usecontext';
import { Usememo } from './page/Usememo';
import { Usecallback } from './page/Usecallback';
import { Liftingstate } from './page/Liftingstate';
import { Map } from './page/Map';
import { Usestateobj } from './page/Usestateobj';
function App() {
  return (
    <>
      <div className="text-center">
      {/* <Destructur fname={'shubham'} lname={'maurya'} /> */}
      {/* <Props name="shubham" /> */}
      {/* <State /> */}
      {/* <Usestate /> */}
      {/* <Useeffect /> */}
      {/* <Useref /> */}
      {/* <PropDriling /> */}
      {/* <Createcontext /> */}
      {/* <Usecontext /> */}
      {/* <Usememo /> */}
      {/* <Usecallback /> */}
      {/* <Liftingstate /> */}
      {/* <Map /> */}
      <Usestateobj />
      </div>
    </>
  );
}

export default App;
