/**
 * This is the secret algorithm
 */
export default {
    unit: {
        'en': {
            'main': '$',
            'cents': ' cents',
        },
        'fr': {
            'main': '€',
            'cents': ' centimes',
        },
    },
    async get(amount, selectedPlatform, locale) {
        await this.stall()
        let message = ''

        let 
            unit = this.unit[locale],
            offer = 0

        if (amount >= 20) {
            offer = Math.round(((amount / 2) + (amount * 0.09)) / 10) * 10
        } else if (amount <= 1) {
            offer = Math.round((((amount / 2) + (amount * 0.09)) * 100) / 10) * 10
            unit = this.unit[locale].cents
        } else {
            offer = Math.round((amount / 2) + (amount * 0.09))
        }

        switch (locale) {
            case 'fr':
            message = "Bonjour! J'ai vu votre annonce sur " + selectedPlatform.name + ","
            + " je vous propose " + offer + unit + ", en cash, aujourd'hui !!!"
            break
            default:
                message = "Hi there! I saw your " + selectedPlatform.name + " ad,"
                + " and I'd like to offer " + offer + unit + ", cash, NOW!!!"
        }

        return message
    },

    async stall(stallTime = 2000) {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }
}
