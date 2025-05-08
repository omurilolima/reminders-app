import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";

interface NewReminderProps {
	onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
	const [title, setTitle] = useState("");

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title) return;
		onAddReminder(title);
		setTitle("");
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="title"></label>
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				id="title"
				type="text"
				className="form-control"
			/>
			<button type="submit" className="my-3 btn btn-primary rounded-pill">
				Add Reminder
			</button>
		</form>
	);
}

export default NewReminder;
