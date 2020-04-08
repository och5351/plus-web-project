exports.tfFunc = function(){


    const tf = require("@tensorflow/tfjs")

    // 옵셔널
    // '@tensorflow/tfjs-node-gpu' gpu와 사용하고 싶다면
    require("@tensorflow/tfjs-node")

    // Train a simple model:
    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 100, activation: "relu", inputShape: [10] }))
    model.add(tf.layers.dense({ units: 1, activation: "linear" }))
    model.compile({ optimizer: "sgd", loss: "meanSquaredError" })

    const xs = tf.randomNormal([100, 10])
    const ys = tf.randomNormal([100, 1])

    model.fit(xs, ys, {
        epochs: 100,
        callbacks: {
        onEpochEnd: (epoch, log) =>
        console.log(`Epoch ${epoch}: loss = ${log.loss}`),
    },
    })


    console.log("삽입 완료");




}; 