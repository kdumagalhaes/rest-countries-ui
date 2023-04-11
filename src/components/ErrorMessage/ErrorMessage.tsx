import { Message } from './styles'

interface ErrorMessageProps {
  text: string
}

export function ErrorMessage({ text }: ErrorMessageProps) {
  return <Message>&#9888; {text}</Message>
}
