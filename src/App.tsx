import RenderPropsLoaderExample from "./components/container-components/RenderPropsLoader";
import RegularListExample from "./components/lists/RegularList";
import ModalComponentExample from "./components/modal/ModalComponent";
import SplitScreenExample from "./components/split-screen/SplitScreen";

/**
 * @description To test the selected functionality, use a specific component here
 */
function App() {
  return (
    <>
      <h1>SplitScreenExample</h1>
      <SplitScreenExample />
      <hr />
      <h1>RegularListExample</h1>
      <RegularListExample />
      <hr />
      <h1>ModalComponentExample</h1>
      <ModalComponentExample />
      <hr/>
      <h1>RenderPropsLoaderExample</h1>
      <RenderPropsLoaderExample/>
    </>
  );
}

export default App;
