import { action } from 'mobx';

const store = {
    feedbacks: [],
    saveFeedback(data) {
        this.feedbacks = data;
    },
    addFeedback(data) {
        this.feedbacks.push(data);
    },
    updateFeedback(data) {
        const idx = this.feedbacks.filter(item => item.id === data.id);
        this.feedbacks[data.id] = data;
    }
}

for (let item in store) {
    if (typeof store[item] === 'function') {
        store[item] = action(store[item]);
    }
}

export default store;

