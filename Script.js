const problems = [
    { component: 'CPU', msg: 'Overheating' },
    { component: 'RAM', msg: 'Memory Parity Error' }
];

// Randomly trigger incident
setInterval(() => {
    const prob = problems[Math.floor(Math.random() * problems.length)];
    const el = document.getElementById(prob.component);
    el.classList.add('status-critical');
    log(`CRITICAL: ${prob.component} - ${prob.msg}`);
}, 10000);

function log(msg) {
    const li = document.createElement('li');
    li.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    document.getElementById('log').prepend(li);
}
