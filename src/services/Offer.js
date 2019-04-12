/**
 * This is the secret algorithm
 */
export default {
    async get(amount, selectedPlatform) {
        await this.stall()
        let message = ''

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

        message = "Hi there! I saw your " + selectedPlatform.name + " ad,"
        + " and I'd like to offer " + offer + unit + ", cash, NOW!!!"

        return message
    },

    async stall(stallTime = 2000) {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }
}
