export interface Email {
    to: string,
    from: string,
    subject: string,
    text: string,
    attachments?: [
        EmailAttachment
    ]
}

export interface EmailAttachment {
    content?: File,
    path?: string,
    filename: string,
}