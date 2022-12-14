export type FormStringParam = {
    title: string;
    onChange: (param: string) => void;
    errorMessage: string | null;
    shouldBeHidden: boolean;
}

export type Notification = {
    id: number;
    created: TDate;
    message: string;
    shown: boolean;
    type: NotificationType;
    recipientId: number;
}

export enum NotificationType {
    TASK_ASSIGNED,
    MESSAGE_RECEIVED
}

export type TDate = {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
}
