import { CustomCommentProvider } from "./components/context/CommentContext";
import { HomePage } from "./pages/HomePage";

const App = () => {
    return (
        <CustomCommentProvider>
            <HomePage />
        </CustomCommentProvider>
    );
};

export default App;
