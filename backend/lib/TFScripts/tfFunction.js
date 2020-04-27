

exports.tfFunc = function(){
    
    //myStorage = window.localStorage;
    rTfFunc() //함수 호출
    //const tf = require("@tensorflow/tfjs")
    
    //console.log(model.summary())
    

    
    // 옵셔널
    // '@tensorflow/tfjs-node-gpu' gpu와 사용하고 싶다면
    //require("@tensorflow/tfjs-node")
    /*
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

*/

}; 
//tensorflow.js 변환 async 지정 함수
async function rTfFunc(){
    const tf = require("@tensorflow/tfjs-node")
    const model = await tf.loadLayersModel('file://C:/Users/och5351/Desktop/tensorflowSave/2020.03.11/tfjs_target_dir/model.json')
    console.log(model)
}

