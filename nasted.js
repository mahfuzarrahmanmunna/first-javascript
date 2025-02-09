const collage = {
    name: "RPI",
    department: ["CSE", "EEE", "CE", "ME"],
    events: ['Science Fair', 'victory days'],
    unique: {
        color: 'blue',
        result: {
            CGP: 4,
            merit: 'top'
        }
    }
}
collage.unique.result.merit = "Center top"
console.log(collage.unique.result.merit)

collage.events[1] = ""