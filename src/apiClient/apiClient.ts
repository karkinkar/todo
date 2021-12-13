import { StoryClass } from "../types/types"

export const get_all_stories = (setStories: CallableFunction) => {
    fetch('http://localhost:3000/stories', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data: StoryClass[]) => setStories(data))
}

export const add_story = (story: StoryClass) => {
    fetch('http://localhost:3000/stories', {
        method: 'POST',
        body: JSON.stringify(story),
        headers: { "Content-Type": "application/json" }
    });
}

export const mark_story_as_done = (story: StoryClass) => {
    story.isDone = true;
    fetch('http://localhost:3000/stories/' + story.id, {
        method: 'PUT',
        body: JSON.stringify(story),
        headers: { "Content-Type": "application/json" }
    });
}

export const delete_story = (id: number) => {
    fetch('http://localhost:3000/stories/' + id, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    });
}