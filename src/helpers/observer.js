const subscriptions = {
    'loginUser': [],
    'notification': []
}

export default {
    subscribe: (eventName,fn) => subscriptions[eventName].push(fn),
    trigger: (eventName, data) => {
        subscriptions[eventName].forEach(fn => fn(data))
    },
}