import { StoryClass } from "../types/types"

export default class ApiClient {
    get_all_stories = (callback: CallableFunction) => {
        fetch('http://localhost:3000/stories', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data: StoryClass[]) => callback(data))
    }

    add_story = (story: StoryClass, callback: CallableFunction) => {
        fetch('http://localhost:3000/stories', {
            method: 'POST',
            body: JSON.stringify(story),
            headers: { "Content-Type": "application/json" }
        })
        .then(() => callback());
    }

    mark_story_as_done = (story: StoryClass, callback: CallableFunction) => {
        story.isDone = true;
        fetch('http://localhost:3000/stories/' + story.id, {
            method: 'PUT',
            body: JSON.stringify(story),
            headers: { "Content-Type": "application/json" }
        })
        .then(() => callback());
    }

    delete_story = (id: number, callback: CallableFunction) => {
        fetch('http://localhost:3000/stories/' + id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
        .then(() => callback());
    }
}
