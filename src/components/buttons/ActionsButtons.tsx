


export const ActionsButtons = () => {
    return (
        <div className="flex flex-row gap-4 mr-1">
            <button className="flex items-center gap-2 text-danger font-medium">
                <img src="./images/icon-delete.svg" alt="" />
                Delete
            </button>
            <button className="flex items-center gap-2 text-primary font-medium">
                <img src="./images/icon-edit.svg" alt="" />
                Edit
            </button>
        </div>
    );
};
