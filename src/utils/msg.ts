import { SuccessIcon, ErrorIcon, InfoIcon, WarningIcon } from '@/const/icon/Icon';
type MessageType = "error" | "info" | "success" | "warning";
function initContainer() {
    let container = document.querySelector<HTMLDivElement>('#message-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'message-container';
        document.body.appendChild(container);
        container.style.cssText = `
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 9999;
    `
    }
    return container;
}
function produceDiv(div: HTMLElement,type: MessageType, msg: string) {
    let color=''
    let bgColor=''
    if (type === "error") {
        color = '#fff';
        bgColor = 'red';
        div.innerHTML = ErrorIcon + msg
    }
    else if (type === "info") {
        color = '#fff';
        bgColor = '#4caf50';
        div.innerHTML = InfoIcon + msg
    }
    else if (type === "success") {
        color = '#fff';
        bgColor = '#2196f3';
        div.innerHTML = SuccessIcon + msg
    }
    else if (type === "warning") {
        color = '#000';
        bgColor = '#ff9800';
        div.innerHTML = WarningIcon + msg
    }
    div.style.cssText = `
    background-color: ${bgColor};
    color: ${color};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    transform: translateY(-50px);
    opacity: 0;
    display: flex;`;
}

export default function Message(type: MessageType, msg: string) {
    const container = initContainer();
    const div = document.createElement('div');
    produceDiv(div, type, msg);
    container.appendChild(div);
    getComputedStyle(div).transform;
    div.style.transform = 'translateY(0)';
    div.style.opacity = '1';
    setTimeout(() => {
        div.style.transform = 'translateY(-50px)';
        div.style.opacity = '0';
        setTimeout(() => { container.removeChild(div); }, 300)
    }, 2000)
}