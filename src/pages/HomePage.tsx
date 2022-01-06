import { CommentsComponent } from "../components/Comment/CommentsComponent";
import { NewComment } from "../components/Comment/NewComment";

export const HomePage = () => {
    return (
        <main className=" bg-very-light-gray px-4 py-8">
            <div className="md:container md:mx-auto md:max-w-2xl">
                <CommentsComponent />
                <NewComment isEdit={false} />
            </div>
        </main>
    );
};
