type EMailType = {
    mail_from: string, // メール送信元
    mail_to: string, // メール送信先
    text: string, // 本文
    name?: string // メール送信者の名前
};

export class EMail {
    send_mail({
        mail_from,
        mail_to,
        text,
        name
    } : EMailType) {
        console.log('')
    }
}