export default {
    install(app) {
        app.config.globalProperties.$copyToClipboard = async (text, label = 'Текст') => {
            try {
                await navigator.clipboard.writeText(text)

                const toast = app.config.globalProperties.$toast
                if (toast) {
                    toast.add({
                        severity: 'success',
                        summary: 'Успішно скопійовано',
                        detail: `${label} скопійовано в буфер обміну`,
                        life: 3000
                    })
                }
                return true
            } catch (err) {
                console.error('Помилка копіювання:', err)
                const toast = app.config.globalProperties.$toast
                if (toast) {
                    toast.add({
                        severity: 'error',
                        summary: 'Помилка',
                        detail: 'Не вдалося скопіювати',
                        life: 3000
                    })
                }
                return false
            }
        }
    }
}