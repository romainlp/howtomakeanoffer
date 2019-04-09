/**
 * This is the secret algorithm
 */
export default {
    get(amount) {
        let 
            unit = '$',
            offer = 0

        if (amount >= 20) {
            offer = Math.round(((amount / 2) + (amount * 0.09)) / 10) * 10
        } else if (amount <= 1) {
            offer = Math.round((((amount / 2) + (amount * 0.09)) * 100) / 10) * 10
            unit = ' cents'
        } else {
            offer = Math.round((amount / 2) + (amount * 0.09))
        }

        return offer + unit
    }
}
