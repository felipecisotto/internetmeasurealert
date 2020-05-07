var measures = require("../model/Measure")
var moment = require('moment')

let insertMeasure = async function (measure) {
    return new Promise(async function (resolve, reject) {
        try {
            var measureInser = new measures(measure)
            resolve(measureInser.save())
        } catch (error) {
            reject(error)
        }

    })
}

let getDayMeasures = async function(){
    return new Promise(async function(resolve,reject) {
        try {
            var start = moment().startOf('day');
            
            var end = moment().endOf('day');

            var todayMeasures = measures.find({ timestamp: { '$gte': start, '$lte': end }})
            resolve(todayMeasures)

        } catch (error) {
            console.log('error when getting today measures: '+error)
            reject(error)
        }
    })
}


module.exports = {
    insertMeasure:insertMeasure,
    getDayMeasures:getDayMeasures
}