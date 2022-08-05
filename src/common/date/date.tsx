


let date = new Date()
let y = date.getFullYear()
let m = date.getMonth() + 1
let d = date.getDate()

let mon = m < 10 ? '0' + m : m
let day = d < 10 ? '0' + d : d

export const todaysLat = `${y}-${mon}-${day}`

let month = new Date().toLocaleString('ru', {
    month: 'long'
})


export const todaysDate = `${day} ${month} ${y}`


export const checkOut = (checkIn: string, chosenAmountOfDays: number) => {

    let date = new Date(checkIn)

    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()

    let mon = m < 10 ? '0' + m : m
    let day = d < 10 ? '0' + d : d

    let ofDays = (+day + chosenAmountOfDays)
    let amountOfDays = ofDays < 10 ? '0' + ofDays : ofDays

    if (amountOfDays > 31) {
        let r = +amountOfDays - 31
        let n = +mon + 1

        let residue = r < 10 ? '0' + r : r
        let newMon = n < 10 ? '0' + n : n

        return `${y}-${newMon}-${residue}`
    }

    return `${y}-${mon}-${amountOfDays}`
}
