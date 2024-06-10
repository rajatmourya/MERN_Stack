import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        // notes: [{
        //     title: "hello",
        //     desc: 'this is dec',
        //     id: "qwerhsd"
        // }]
        notes: []
    },
    reducers: {
        createNotes: (state, action) => {
            // state.notes = [...state.notes, action.payload]
            state.notes.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id != action.payload);
        }

        }
        });

    export default NotesSlice.reducer;

    export const {createNotes, deleteNote} = NotesSlice.actions;