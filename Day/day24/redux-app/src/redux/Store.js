import { configureStore } from "@reduxjs/toolkit";
// import messageSlice from "./slices/messageSlice";
import messageReducer from "./slices/messageSlice";
import NotesSlice from "./slices/NotesSlice";

export default configureStore({
    reducer: {
        // messageReducer: messageSlice
        messageReducer,
        notesReducer: NotesSlice
    }
});