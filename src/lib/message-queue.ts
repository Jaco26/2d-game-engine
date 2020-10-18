
export class MessageQueue {
  messages: string[] = []

  send(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }
}