import {useState, react} from 'react'
import { close } from "ionicons/icons";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import notificationIcon from "../images/notification-icon.png";
import { IonIcon } from '@ionic/react';

const Notification = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Notification Bar (Opens Modal) */}
            <div className="notification-bar" onClick={() => setOpen(!open)}>
                <img src={notificationIcon} alt="Notification vector icon" />
                <span className="notification-count">3</span>
            </div>

            {/* Radix Notification Modal */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="dialog-overlay" />
                    <AnimatePresence>
                        {open && (
                            <Dialog.Content asChild>
                                <motion.div
                                    className="notification-modal"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    <Dialog.Title className='modal-title'>Notifications</Dialog.Title>
                                    <ul>
                                        <li>📢 New message from Admin</li>
                                        <li>🚀 Your earnings have been updated</li>
                                        <li>🔔 Reminder: Payment due</li>
                                    </ul>
                                    <Dialog.Close className="close-button">
                                        <IonIcon icon={close} className='close-button' />
                                    </Dialog.Close>
                                </motion.div>
                            </Dialog.Content>
                        )}
                    </AnimatePresence>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default Notification