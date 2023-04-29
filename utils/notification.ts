import { Store } from "react-notifications-component"
const notification = (message: string, title: string, type: 'danger' | 'success') => {
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ['animate__animated', 'animate__headShake'],
        animationOut: ['animate__animated', 'animate__headShake'],
        dismiss: {
            duration: 2000,
            showIcon: true,
            pauseOnHover: true
        },
        slidingExit: {
            duration: 500,
            timingFunction: 'ease-out',
            delay: 0
        },
        hasBeenRemoved: true
    })
}
export default notification