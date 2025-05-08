// Install axios to call the backend: "npm i axios"
// Fake Backend Service: https://jsonplaceholder.typicode.com/
import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
	http = axios.create({
		baseURL: "https://jsonplaceholder.typicode.com/",
	});

	// Get the reminders list
	async getReminders() {
		const response = await this.http.get<Reminder[]>("/todos");
		return response.data;
	}

	// Add a new reminder
	async addReminder(title: string) {
		const response = await this.http.post<Reminder>("/todos", { title });
		return response.data;
	}

	// Delete a reminder
	async removeReminder(id: number) {
		const response = await this.http.delete("/todos" + id);
		return response.data;
	}
}

// Instead of exporting the reminder of ReminderService class,
// We're going to export an instance of this class. With this, the consumers
// of this module don't have to new up an instance of this service every time.
export default new ReminderService();
