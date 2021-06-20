import { OnePager, Page } from '../components/onepager';
import Test from '../components/test';

export default function Landing() {
  return (
    //   <div>
    //       <Test />
    //   </div>
    <OnePager>
        <Page title="Home" active>
            <p>Page: Home</p>
        </Page>

        <Page title="Projects">
            <p>Page: Projects</p>
        </Page>
    </OnePager>
  );
}
