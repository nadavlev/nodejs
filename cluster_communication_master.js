const cluster = require('cluster');
const os = require('os');

//Mock DB call
const numberOfUsersinDb = function() {
    this.count = this.count || 2;
    this.count = this.count * 2;
    return this.count;
}

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} cpus`);
    for (let i = 0; i <cpus; i++) {
        cluster.fork();
    }

    const updateWorkers = () => {
        const userCount = numberOfUsersinDb();
        Object.values(cluster.workers).forEach( worker => {
            if (!worker && worker.state === 'listening') {
                worker.send({userCount});

            }
        });
    };
    updateWorkers();
    setInterval(updateWorkers, 5000);

    cluster.on('exit', (worker, code, signal) => {
        if (code != 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. \n Starting new server`);
            cluster.fork();
        }
    })

    cluster.on('error', err => console.error(err));

} else {
    require('./cluster_communication_server');
}
