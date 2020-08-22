import { action } from 'mobx';

const store = {
    feedbacks: [],
    saveFeedback(data) {
        this.feedbacks = data;
    },
    addFeedback(data) {
        this.feedbacks.push(data);
    }
}

for (let item in store) {
    if (typeof store[item] === 'function') {
        store[item] = action(store[item]);
    }
}

export default store;

